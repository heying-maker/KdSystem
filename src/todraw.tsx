import './App.less'
import React from 'react'
import { Menu, Layout, List, Button, Input, Row, Col, Divider, Upload, Select } from 'antd'
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { ItoDraw } from './interface'
import { initcanvas } from '../common/mycanvas'
import $ from 'jquery'

const tools = [
  {
    title: '选择元素',
    id: 'select'
  }, {
    title: '长方形',
    id: 'rect'
  }, {
    title: '圆形',
    id: 'circle'
  }, {
    title: '直线',
    id: 'line'
  }, {
    title: '箭头',
    id: 'arrow'
  }, {
    title: '橡皮擦',
    id: 'remove'
  }, {
    title: '虚线',
    id: 'dottedline'
  }, {
    title: '文本',
    id: 'text'
  }, {
    title: '自由绘制',
    id: 'free'
  }

]
const coloroptions = [{ value: 'red' }, { value: 'green' }, { value: 'yellow' }, { value: 'black' }, { value: 'blue' }, { value: 'pink' }, { value: 'white' }]
const bgcolors = [{ value: 'rgb(16,109,156)', label: '浅蓝色' }, { value: 'rgb(90,146,173)', label: '哑光蓝色' }, { value: 'rgb(61,89,171)', label: '钴色' },
  { value: 'rgb(128,42,42)', label: '朱红' },
  { value: 'rgb(226,205,188)', label: '浅黄' },
  { value: 'rgb(177,122,125)', label: '朱粉' },
  { value: 'rgb(214,214,214)', label: '青色' }]
class ToDraw extends React.Component<any, ItoDraw> {
    [mycanvas: string]: any;

    constructor(props: any) {
      super(props)
      this.state = {
        drawtype: 'line', // 画笔类型
        color: 'red', // 画笔颜色
        drawWidth: '2', // 画笔大小
        mouseFrom: { x: '', y: '' },
        mouseTo: { x: '', y: '' }

      }
    }

    componentDidMount() {
      this.init()
    }

    // componentWillReceiveProps(nextprops) {

    // }

    // componentDidUpdate() {

    // }

    // componentWillMount() {

    // }

    init() {
      initcanvas(this)
      // console.log("---this", this);
    }

    clearCanvas(e) { // 清空画板
      this.mycanvas.clear()
    }

    gettools(e) {
      const id = e.target.id
      this.setState({
        drawtype: id,
        mouseFrom: { x: '', y: '' },
        mouseTo: { x: '', y: '' }
      })
      if (id == 'free') {
        this.mycanvas.isDrawingMode = true
      } else {
        this.mycanvas.isDrawingMode = false
      }
      if (id == 'select') {
        this.mycanvas.skipTargetFind = false// 画板元素被选中
        this.mycanvas.selection = true// 画板显示被选中
        this.mycanvas.selectable = true
      } else {
        this.mycanvas.skipTargetFind = true// 画板元素不被选中
        this.mycanvas.selection = false// 画板不显示被选中
        this.mycanvas.selectable = false
      }

      $('#' + id).addClass('active')
      $('#' + id).siblings().removeClass('active')
    }

    changeColor(color) {
      this.setState({ color })
    }

    changeBGColor(color) {
      console.log('color', color)
      $('#canvas').css('background-color', color)
    }

    render() {
      return (

        <div style={{ paddingLeft: '30px' }}>
          <Row>
            <Col md={3}> <Button type='primary' onClick={(e) => this.clearCanvas(e)}> 清空画板 </Button></Col>
            <Col md={3}>  <Upload >
              <Button icon={<UploadOutlined />}>导出图片</Button>
            </Upload>
            </Col>
            <Col md={3}>  <Upload >
              <Button icon={<DownloadOutlined />}>导入图片</Button>
            </Upload>
            </Col>
          </Row>
          <Divider />
          <div>
            <Row>
              <Col span={4}>画笔颜色：</Col>
              <Col span={4}>
                <Select
                  showArrow
                  defaultValue={'red'}
                  style={{ width: '100%' }}
                  options={coloroptions}
                  onChange={(e) => this.changeColor(e)}
                /></Col>
              <Col span={4}>切换画布颜色：</Col>
              <Col span={4}>
                <Select
                  showArrow
                  defaultValue={'white'}
                  style={{ width: '100%' }}
                  options={bgcolors}
                  onChange={(e) => this.changeBGColor(e)}
                /></Col>

            </Row>
          </div>

          <div >
            <canvas id="canvas" ></canvas>
            <div className="toolbox">
              <ul>
                {
                  tools.map((item) => {
                    return <li key={item.id} onClick={(e) => this.gettools(e)} id={item.id} className={item.id == 'line' ? 'active' : ''}>
                      {item.title}
                    </li>
                  })
                }

              </ul>
            </div>

          </div>
        </div>
      )
    }
}

// ReactMixin.onClass(ToDraw, Reflux.connect(store, "allData"))

export default ToDraw
