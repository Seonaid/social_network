/**
 * Created by seonaid on 14-12-17.
 */
"use strict"

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        username: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            User.hasMany(models.Task)
        }
      }
    });
    return User;
};