/**
 * Created by seonaid on 14-12-18.
 */

"use strict"

module.exports = function(sequelize, DataTypes){
    var Account = sequelize.define("Account", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        salted_password: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                Account.hasMany(models.Alias)
            }
        }
    });

    return Account;
}