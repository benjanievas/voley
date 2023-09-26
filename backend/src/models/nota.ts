import db from '../db/conection';
import { DataTypes } from 'sequelize';

const Nota = db.define('Notas', {
    nombre : {
        type: DataTypes.STRING },
    fecha : {
        type: DataTypes.DATE },
},{
    createdAt:false,
    updatedAt:false
}
);

export default Nota;
