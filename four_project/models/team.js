module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('team',{
    name :{
      type : DataTypes.STRING(10),
      allowNULL : false,
    },
    birth :{
      type: DataTypes.STRING(20),
      alllowNULL : false,
    },
    bloodtype:{
      type :DataTypes.STRING(10),
      allowNULL : false,
    },
    highschool:{
      type : DataTypes.STRING(20),
      allowNULL : false,
    },
    adrs:{
      type : DataTypes.STRING(15),
      allowNULL : false,
    },
    motto:{
      type : DataTypes.STRING(30),
      allowNULL : false,
    },
    introduce : {
      type : DataTypes.STRING(30),
      allowNULL : false,
    },
  },{
  timestamps : false,
});
};
