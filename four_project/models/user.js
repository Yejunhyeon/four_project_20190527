module.exports = (sequelize, DataTypes) =>(
  sequelize.define('user',{
    email:{
      type: DataTypes.STRING(40),
      allowNull:false,
      unique: true,
    },
    nick:{
      type: DataTypes.STRING(15),
      allowNull:false,
    },
    password:{
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    provider:{
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'local',
    },
    tel:{
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    adr:{
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },{
    timestamps: true, //createdAt, updateAt,deletedAt
    paranoid: true, //필드/컬럼 자동생성, 값 자동입력
})
);
