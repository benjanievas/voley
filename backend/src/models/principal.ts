import db from '../db/conection';
import { DataTypes } from 'sequelize';

const principal = db.define('principal', {
    novedades : {
        type: DataTypes.STRING },
    logico : {
            type: DataTypes.NUMBER },
    fecha : {
        type: DataTypes.DATE },
    idcategoria : {
        type: DataTypes.NUMBER },
    
},{
    createdAt:false,
    updatedAt:false
});

export default principal;

