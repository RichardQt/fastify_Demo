import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

// 使用import来导入自定义的js模块时，可能会有警告：无法找到模块，但不影响运行
import { getdata } from './lib/getdata.js'

let data:any[]
getdata().then((value: any[]) => {
    data = value
    // console.log(data);
})



fastify.get('/', async () => {
    // return {hello:'word'}
    return data
})
fastify.listen(5001, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // 服务器监听地址：${address}
})
