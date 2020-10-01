import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderBack,
  Tabs,
  TabsItem,
  Header,
  Group,
  Cell,
  FixedLayout,
  Button,
  CardGrid,
  Card,
  Div,
  Title,
  Text,
  Radio,
  Footer
} from '@vkontakte/vkui';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon20ViewOutline from '@vkontakte/icons/dist/20/view_outline';
import Icon20Like from '@vkontakte/icons/dist/20/like';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';

class CommonCard extends React.Component {
  render() {
    return (
      <Card
        size="l"
        style={{ marginBottom: 8 }}
        onClick={this.props.onArticleClick}
      >
        <div className="card-content" >
          <div className="main-info" >
            <div className="card-image" >
              <img src="https://ia.wampi.ru/2020/09/30/card.jpg" alt="" />
            </div>
            <Title level="2" weight="medium">Title 2 semibold</Title>
          </div>
          <div className="counter" >
            <div className="viewed-block" >
              <Text weight="medium" style={{ marginRight: 5 }}> 78452</Text>
              <Icon20ViewOutline />
            </div>
            <div className="liked-block" >
              <Text weight="medium" style={{ marginRight: 5 }}> 1234</Text>
              <Icon20Like />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

class TabMainContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FixedLayout vertical="bottom">
          <Div>
            <Button
              before={<Icon28AddOutline />}
              size="l"
              stretched
            >
              Добавить статью
            </Button>
          </Div>
        </FixedLayout>
        <Group>
          <CardGrid style={{ paddingTop: 40, paddingBottom: 60 }}>
            <CommonCard />
            <CommonCard onArticleClick={this.props.onArticleClick} />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
          </CardGrid>
        </Group>
      </React.Fragment>
    );
  }
}

class TabFavouriteContent extends React.Component {
  render() {
    return (
      <Group id="f">
        <CardGrid style={{ paddingTop: 40, paddingBottom: 60 }}>
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </CardGrid>
      </Group>
    );
  }
}

class PanelSettingsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Group>
          <Cell>
            <div className="user-info">
              <div className="user-photo" >
                <img src="https://ia.wampi.ru/2020/09/30/card.jpg" alt="" />
              </div>
              <Title level="2" weight="medium">Петя Васечкин</Title>
            </div>
          </Cell>
        </Group>
        <Group separator="show" header={<Header mode="secondary">Выбрать тему</Header>}>
          <Cell>
            <Radio name="theme" value="light" defaultChecked={false}>Светлая</Radio>
            <Radio name="theme" value="dark" defaultChecked={true}>Тёмная</Radio>
          </Cell>
        </Group>
        <Footer>
          <Text>Mango Moon Union</Text><Text>version 0.0.1</Text>
        </Footer>
      </React.Fragment>
    );
  }
}

class PanelHomeContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FixedLayout vertical="top">
          <Tabs mode="segmented">
            <TabsItem
              selected={(this.props.activeTab === 'main') ? true : false}
              onClick={this.props.handleTabMainClick}
            >
              Главная
            </TabsItem>
            <TabsItem
              selected={(this.props.activeTab === 'favourite') ? true : false}
              onClick={this.props.handleTabFavouriteClick}
            >
              Избранное
            </TabsItem>
          </Tabs>
        </FixedLayout>
        {this.props.activeTab === 'main' && <TabMainContent onArticleClick={this.props.onArticleClick} />}
        {this.props.activeTab === 'favourite' && <TabFavouriteContent onArticleClick={this.props.onArticleClick} />}
      </React.Fragment>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'home',
      activeTab: 'main'
    };
  }

  /*handlers for switching between Panels*/
  handleSettingsClick() {
    this.setState({activePanel: 'settings'});
  }
  handleArticleClick() {
    this.setState({activePanel: 'article'});
  }
  handleBackClick() {
    this.setState({activePanel: 'home'});
  }

  /*handlers for TAB clicks*/
  handleTabMainClick() {
    this.setState({activeTab: 'main'});
  }
  handleTabFavouriteClick() {
    this.setState({activeTab: 'favourite'});
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="home">
              <PanelHeader
                className="logo"
                left={
                  <PanelHeaderButton
                    onClick={() => this.handleSettingsClick()}
                  >
                    <Icon28SettingsOutline fill="var(--common-color)"/>
                  </PanelHeaderButton>
                }
                separator={false}
              >
                <span className="logo">Lang Lib</span>
              </PanelHeader>

              <PanelHomeContent
                activeTab={this.state.activeTab}
                handleTabMainClick={() => this.handleTabMainClick()}
                handleTabFavouriteClick={() => this.handleTabFavouriteClick()}
                onArticleClick={() => this.handleArticleClick()}
               />
        </Panel>
        <Panel id="settings">
              <PanelHeader
                left={
                  <PanelHeaderBack
                    onClick={() => this.handleBackClick()}
                    style={{ color: 'var(--common-color)' }}
                  />
                }
                separator={false}
              >
                <span className="logo">Настройки</span>
              </PanelHeader>

              <PanelSettingsContent />
        </Panel>
        <Panel id="article">
              <PanelHeader
                left={
                  <PanelHeaderBack
                    onClick={() => this.handleBackClick()}
                    style={{ color: 'var(--common-color)' }}
                  />
                }
                separator={false}
              >
                <span className="logo">Настройки</span>
              </PanelHeader>


        </Panel>
      </View>
    );
  }
}

export default Page;
