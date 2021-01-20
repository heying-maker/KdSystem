/**
 * 平台属性
 */
export interface IMyPlatForm{
    _PLATFORM_NAME:String, //平台名称
}
/**快递属性 */
export interface IKuaiDi{
    kddype:Number,
    kdName:String,  //快递名称
    styleId:Number,
    exId:Number,
    isnotEditArea:Boolean, //是否存在不可编辑区域
    uploadfile: Boolean,  //上传底图/xml
    modelList_id:Number,
    widthpx:Number,  //宽
    heightpx:Number,   //高度
    serviceOption:Object,  //服务选项
    addedService:Object,  //增值服务
    businessType:Object, //业务类型

}