module.exports = (sequelize, DataTypes) =>{
  return sequelize.define('comment',{
    nick:{
      type: DataTypes.STRING(20),
      allowNull:false,
    },
    context:{
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    password:{
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },{
    timestamps: true, //createdAt, updateAt,deletedAt
    paranoid: true, //필드/컬럼 자동생성, 값 자동입력
})
};
