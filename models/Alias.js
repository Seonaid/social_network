/**
 * Created by seonaid on 14-12-18.
 */
"use strict"

module.exports = function(sequelize, DataTypes){
    var Alias = sequelize.define("Alias", {
        alias_name: DataTypes.STRING,
        profile_photo: { type: DataTypes.STRING, allowNull: true }
    }, {
        classMethods: {
            associate: function(models) {
                Alias.belongsTo(models.Account);
                Alias.hasMany(models.Community);
            }
        }
    });

    return Alias;
}