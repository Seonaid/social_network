/**
 * Created by seonaid on 14-12-18.
 */

"use strict"

module.exports = function(sequelize, DataTypes){
    var Community;
    Community = sequelize.define("Community", {
            community_name: DataTypes.STRING,
            description: DataTypes.STRING(1000),
            featured_image: DataTypes.STRING,
            public: {type: DataTypes.BOOLEAN, defaultValue: true},
            adult_content: {type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        classMethods: {
            associate: function(models) {
                Community.hasMany(models.Alias);
            }
        }
    });

    return Community;
}