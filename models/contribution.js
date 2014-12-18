/**
 * Created by seonaid on 14-12-18.
 */
"use strict"

module.exports = function(sequelize, DataTypes){
    var Contribution = sequelize.define("Contribution", {
        Contribution_name: DataTypes.STRING
    }, {
    classMethods: {
        associate: function(models) {
            Contribution.belongsTo(models.Community);
            Contribution.hasOne(Contribution, { as: 'parent', foreignKey: 'parentId' });
        }
    }
});

return Contribution;
}