# nodemon.json各配置项含义。

- restartable：设置重启模式（指定重启的命令，是一个字符串，默认是 'rs'）

- verbose：是否输出重启的详细信息，值是一个布尔值，true 是打印详细信息，false 是不打印

- watch：这里指定监视的文件夹或文件，是一个数组，每个参数是目录或文件）

* ignore：忽略监视的文件或文件夹，默认忽略的文件有：.git, node_modules, bower_components, .sass-cache

* delay：设置延迟时间，毫秒

* exec：执行的命令

* ext：指定默认文件的后缀，参数是一个字符串，每个后缀之间用空格分隔，默认支持 js coffee litcoffee

* script : 指定监视的文件，这个一般是指定项目入口的 js 文件 

* env : 运行环境 development 是开发环境，production 是生产环境，port 是端口号
修改nodemon命令配置使用--config选项。
