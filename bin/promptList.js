module.exports = [
  {
    name: 'version',
    description: '版本号',
  },
  {
    name: 'description',
    message: '请输入项目描述',
  },
  {
    name: 'author',
    message: '请输入作者名称',
  },
  {
    name: 'repository',
    message: '仓库地址',
  },
  {
    name: 'template',
    message: '选择模板',
    type: 'list',
    choices: [
      {
        name: '使用服务端渲染',
        value: 'ssr',
      }, 
      {
        name: '不使用服务端渲染',
        value: 'nossr',
      },
    ],
  },
];
