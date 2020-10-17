module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('japan',{
      date :{
        type : DataTypes.STRING(40),
        allowNULL : false,
      },
      place :{
        type: DataTypes.STRING(40),
        alllowNULL : false,
      },
      cost :{
        type :DataTypes.STRING(40),
        allowNULL : false,
      },
      plan :{
        type : DataTypes.STRING(40),
        allowNULL : false,
      },
      experience:{
        type : DataTypes.STRING(100),
        allowNULL : false,
      },
    },{
    timestamps : false,
  });
  };
  