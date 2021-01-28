import './App.less'
import React from 'react'
import { Menu, Layout, Breadcrumb, Button, Input, Row, Col, Divider } from 'antd'
import { IMyPlatForm } from './interface'
import ToDraw from './todraw'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
const arrPlatform = [
  { key: 0, name: '淘宝' },
  { key: 1, name: '拼多多' },
  { key: 2, name: '通用平台' },
  { key: 3, name: '阿里' },
  { key: 4, name: '画图' }

]
const data = [
  { key: 0, name: '顺丰', exid: '0001' },
  { key: 1, name: '韵达', exid: '0231' },
  { key: 2, name: '中通', exid: '0031' }
]

class App extends React.Component<any, IMyPlatForm> {
  constructor(props: any) {
    super(props)
    this.state = {
      platform: '',
      isDraw: false
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextprops) {

  }

  componentDidUpdate() {

  }

  componentWillMount() {

  }

  onclick(e) {
    this.setState({ platform: arrPlatform[e.key].name })
  }

  onSrearch(e) {
    console.log('eeee', e)
    this.setState({ platform: arrPlatform[e.key].name })
    if (e.key == 4) { // 画布
      this.setState({ isDraw: true })
    } else {
      this.setState({ isDraw: false })
    }
  }

  render() {
    return (

      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">快递对接系统</Menu.Item>

            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                // defaultSelectedKeys={['4']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title="请选择平台">
                  {arrPlatform.map((v, i) => {
                    return (<SubMenu key={v.key} title={v.name} onTitleClick={(e) => this.onSrearch(e)}>
                      {data.map((item) => {
                        if (item.key == v.key) {
                          return <Menu.Item key={item.key} onClick={(e) => this.onclick(e)} >{item.name} </Menu.Item>
                        }
                      })}

                    </SubMenu>)
                  })
                  }
                </SubMenu>

              </Menu>
            </Sider>

            <Layout >
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>平台</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.platform}</Breadcrumb.Item>
              </Breadcrumb>
              {!this.state.isDraw ? <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Row>
                  <Col md={3}>当前平台:</Col>
                  <Col> <Input value={this.state.platform} size='small' /></Col>
                </Row>
                <Row style={{ margin: '20px' }}>
                  <Col md={5}><Button type='primary'>编辑快递</Button></Col>
                  <Col> <Button type='primary'>对接新快递</Button></Col>
                </Row>

                <Divider />

              </Content> : <ToDraw />
              }
            </Layout>

          </Layout>
        </Layout>
      </div>
    )
  }
}

export const app = <App />
