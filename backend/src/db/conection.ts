import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('federacion', 'root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default sequelize;
