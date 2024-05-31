const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Type = sequelize.define("type", {
        
        id:{type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, { timestamps: false });

    return Type;
};
