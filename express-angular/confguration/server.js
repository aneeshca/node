const  Sequlize =require('sequelize')
 const sequlize=new Sequlize(
    'interviewemployee',
    'root',
    'root',
      {
        host: 'localhost',
        dialect: 'mysql'
      }


);
sequlize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 module.exports=sequlize;