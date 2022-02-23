/* eslint-disable jsx-a11y/alt-text */
'use strict';

import React, { FC, useEffect, useState } from 'react';

import styles from './assets/index.module.css';

const WebView : FC = () => {
  const [selectedKey, setSelectedKey] = useState<any>('COMPETITION');

  useEffect(()=> {
    var element = document.getElementById(selectedKey);
    if(element)
      element.scrollIntoView({behavior:'smooth'});
  },[selectedKey])

  return (
    <div className={`${styles.page} flex-col`}>
      <div className={`${styles.layer1} flex-col`}>
        <div className={`${styles.main1} flex-col`}>
          <div className={`${styles.outer1} flex-row justify-between`}>
            <div className={`${styles.layer2} flex-col`}>
              <div className={`${styles.bd1} flex-col`}>
                <img
                  className={`${styles.img1}`}
                  src={
                    require('./assets/img/psl2tgw06teull8yejey07ccb64lal1ydfc92a5e-d901-4309-b167-6be4811fe3f8.png')
                  }
                />
                <div className={`${styles.block1} flex-col`} />
                <div className={`${styles.block2} flex-row justify-between`}>
                  <span className={`${styles.info1}`}>2022</span>
                  <div className={`${styles.bd2} flex-col`} />
                </div>
                <span className={`${styles.info2}`}>算法挑战赛</span>
                <div className={`${styles.block3} flex-col`} onClick={()=>{
                  setSelectedKey('SETUP')
                }}>
                  <span className={`${styles.info3}`}>报名参赛</span>
                </div>
              </div>
            </div>
            <div className={`${styles.layer3} flex-col`}>
              <div className={`${styles.box1} flex-col`}>
                <div className={`${styles.main2} flex-row justify-between`}>
                  <img
                    className={`${styles.pic1}`}
                    src={
                      require('./assets/img/psx25cwaiwvu4zy4yhvnjotfenqkpn97e82e8b3-4e9a-49f1-a62b-2d50f86d7910.png')
                    }
                  />
                  <div className={`${styles.group1} flex-col`} />
                  <img
                    className={`${styles.img2}`}
                    src={
                      require('./assets/img/psm71399i2u5wi7oo0b61im288h69iiunl0a39ab1d-ec70-4da6-8d66-1f6e55520a9e.png')
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.outer2} flex-row`}>
            <div className={`${styles.block4} flex-col justify-between`}>
              <div className={`${styles.mod1} flex-col`} />
              <div className={`${styles.mod2} flex-col`} />
            </div>
            <div className={`${styles.block5} flex-col`}>
              <span className={`${styles.word1}`} id='COMPETITION' >大赛介绍</span>
              <div className={`${styles.main3} flex-col`}>
                <span className={`${styles.word2}`}>COMPETITION</span>
              </div>
              <div className={`${styles.main4}`}>
                <span className={`${styles.info4}`}>算法挑战赛，两大赛道，</span>
                <span className={`${styles.info5}`}>100万</span>
                <span className={`${styles.txt1}`}>高额奖金，</span>
                <span className={`${styles.txt2}`}>京东offer</span>
                <span className={`${styles.word3}`}>机会</span>
              </div>
              <div className={`${styles.main5} flex-col`}>
                <div className={`${styles.main6} flex-col justify-between`}>
                  <span className={`${styles.info6}`}>赛道一</span>
                  <span className={`${styles.word4}`}>电商关键属性的图文匹配</span>
                </div>
              </div>
              <span className={`${styles.word5}`} id='SETUP'>赛道设置</span>
              <div className={`${styles.main7} flex-col`}>
                <span className={`${styles.info7}`}>SET&nbsp;&nbsp;UP</span>
              </div>
            </div>
            <div className={`${styles.block6} flex-col`} />
          </div>
          <div className={`${styles.outer3} flex-row`}>
            <div className={`${styles.box2} flex-col`}>
              <div className={`${styles.bd3} flex-col justify-between`}>
                <div className={`${styles.box3} flex-col`}>
                  <span className={`${styles.word6}`}>电商关键属性的图文匹配</span>
                </div>
                <span className={`${styles.paragraph1}`}>
                  京东积累了电商零售场景下的海量商品的图文数据，其中商品主图和
                  <br />
                  商品标题是最直观、最容易触达到用户的数据。因此，图文的一致性
                  <br />
                  （即图文匹配）至关重要，要求模型根据图片和文本判断出两种模态
                  <br />
                  数据传递的信息是否一致。通常，商品主图和标题包含大量的商品属
                  <br />
                  性信息。在实际业务中，图片里商品的关键属性与商品标题描述的是
                  <br />
                  否匹配，是影响用户体验的重要因素。本赛题要求参赛队伍利用脱敏
                  <br />
                  后的京东电商平台图文数据，通过商品图片与商品标题在商品关键属
                  <br />
                  性上的关联程度来判断两者是否匹配。
                </span>
              </div>
              <div className={`${styles.outer5} flex-col`} onClick={()=>{
                window.open(`https://www.heywhale.com/home/competition/620b34c41f3cf500170bd6ca`)
              }}>
                <span className={`${styles.word8}`}>报名入口</span>
              </div>
            </div>
            <div className={`${styles.box4} flex-col`}>
              <div className={`${styles.outer4} flex-col justify-between`}>
                <div className={`${styles.box5} flex-col`}>
                  <span className={`${styles.word7}`}>商品标题实体识别</span>
                </div>
                <span className={`${styles.paragraph2}`}>
                  京东商品标题包含了商品的大量关键信息，商品标题实体识别是NLP
                  <br />
                  应用中的一项核心基础任务，可以为多种下游场景所复用，从标题文
                  <br />
                  本中准确抽取出商品相关实体能够提升检索、推荐等业务场景下的用
                  <br />
                  户体验和平台效率。本赛题要求选手使用模型抽取出商品标题文本中
                  <br />
                  的实体。
                </span>
              </div>
              <div className={`${styles.outer12} flex-col`} onClick={()=>{
                window.open(`https://www.heywhale.com/home/competition/620b34ed28270b0017b823ad`)
              }}>
                <span className={`${styles.word8}`}>报名入口</span>
              </div>
            </div>
          </div>
          <div className={`${styles.outer13} flex-col`}>
          </div>
          <div className={`${styles.outer6} flex-row justify-between`}>
            <div className={`${styles.layer4} flex-col`} />
            <div className={`${styles.layer5} flex-col justify-between`}>
              <span className={`${styles.txt3}`} id='PARTICIPANTS'>参赛对象</span>
              <div className={`${styles.block7} flex-col`}>
                <span className={`${styles.word9}`}>PARTICIPANTS</span>
              </div>
            </div>
          </div>
          <div className={`${styles.outer7} flex-col`} />
          <div className={`${styles.outer8} flex-row justify-between`}>
            <div className={`${styles.bd4} flex-col`} />
            <div className={`${styles.bd5} flex-col justify-between`}>
              <span className={`${styles.info8}`} id='INTRODUCTION' >赛制说明</span>
              <div className={`${styles.box6} flex-col`}>
                <span className={`${styles.word10}`}>INTRODUCTION</span>
              </div>
            </div>
          </div>
          <span className={`${styles.word11}`}>2月25日&nbsp;–&nbsp;4月21日</span>
          <div className={`${styles.outer9} flex-col`}>
            <span className={`${styles.info9}`}>报名&amp;组队</span>
          </div>
        </div>
        <span className={`${styles.infoBox1}`}>
          GLOBAL&nbsp;AI&nbsp;
          <br />
          INNOVATION&nbsp;CONTEST
        </span>
        <span className={`${styles.txt4}`}>全球人工智能技术创新大赛&nbsp;</span>
        <img
          className={`${styles.pic2}`}
          src={
            require('./assets/img/psqtxlnra3zfhr22zwyseyxbqgbhdterbrcd661181c-b8d2-4df9-846c-11cb00d70643.png')
          }
        />
        <div className={`${styles.main8} flex-col`}>
          <div className={`${styles.wrap1} flex-row`}>
            <div className={`${styles.box7} flex-col`} 
              style={{background:selectedKey==='COMPETITION' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
              onClick={()=>{setSelectedKey('COMPETITION')}}
            >
              <span className={`${styles.word12}`}>大赛介绍</span>
            </div>
            <div className={`${styles.box7} flex-col`}
               style={{background:selectedKey==='SETUP' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
               onClick={()=>{setSelectedKey('SETUP')}}
            >
              <span className={`${styles.word12}`}>赛道设置</span>
            </div>
            <div className={`${styles.box7} flex-col`}
              style={{background:selectedKey==='PARTICIPANTS' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
              onClick={()=>{setSelectedKey('PARTICIPANTS')}}
            >
              <span className={`${styles.word12}`}>参赛对象</span>
            </div>
            <div className={`${styles.box7} flex-col`}
              style={{background:selectedKey==='GUESTS' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
              onClick={()=>{setSelectedKey('GUESTS')}}
            >
              <span className={`${styles.word12}`}>竞赛嘉宾</span>
            </div>
            <div className={`${styles.box7} flex-col`}
              style={{background:selectedKey==='INTRODUCTION' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
              onClick={()=>{setSelectedKey('INTRODUCTION')}}
            >
              <span className={`${styles.word12}`}>赛制说明</span>
            </div>
            <div className={`${styles.box7} flex-col`}
              style={{background:selectedKey==='PRIZES' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
              onClick={()=>{setSelectedKey('PRIZES')}}
            >
              <span className={`${styles.word12}`}>奖项设置</span>
            </div>
            <div className={`${styles.box7} flex-col`}
              style={{background:selectedKey==='OTHERS' ? 'rgba(121, 124, 243, 1)' : 'transparent'}}
              onClick={()=>{setSelectedKey('OTHERS')}}
            >
              <span className={`${styles.word12}`}>其他说明</span>
            </div>
          </div>
        </div>
        <span className={`${styles.infoBox2}`}>
          2022全球人工智能技术创新大赛（以下简称“大赛”）是由中国人工智能学会和杭州市余杭区人民政府共同创办，由杭州未来科技城管委会和京东零售联合承办。大赛
          <br />
          将立足国际视野，聚焦前沿科技与应用创新，推进人工智能领域的学术交流、人才培养、技术发展以及跨界应用与融合，打造人工智能的人才交流平台与产业生态圈。
          <br />
          <br />
        </span>
        <div className={`${styles.main9} flex-col`}>
          <div className={`${styles.wrap2} flex-col justify-between`}>
            <span className={`${styles.txt8}`}>赛道二</span>
            <span className={`${styles.word14}`}>商品标题实体识别</span>
          </div>
        </div>
        <span className={`${styles.word15}`}>
          本次大赛将设置电商关键属性的图文匹配和商品标题实体识别两个智能算法赛道，具体说明详见附件“赛题描述”
        </span>
        <div className={`${styles.main10} flex-col justify-center`}>
          <span className={`${styles.word16}`}>01</span>
        </div>
        <div className={`${styles.main11} flex-col justify-center`}>
          <span className={`${styles.word17}`}>02</span>
        </div>
        <div className={`${styles.main12}`}>
          <span className={`${styles.paragraph3}`}>
            本次大赛面向全球开放，不限年龄国籍，高等院校在校学生（包括高职高专、本科、研究生）以及科研机构和企业从业人员均可参赛。
            <br />
            具体要求如下：
            <br />
          </span>
          <span className={`${styles.txt9}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div className={`${styles.main13} flex-col`}>
          <div className={`${styles.box8} flex-row justify-between`}>
            <div className={`${styles.layer6} flex-col justify-between`}>
              <div className={`${styles.section1} flex-col`} />
              <div className={`${styles.section2} flex-col`} />
            </div>
            <div className={`${styles.layer7}`}>
              <span className={`${styles.info12}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={`${styles.infoBox3}`}>
                可以自由组队参赛，具体组队要求见赛道相关说明；
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参赛选手应保证报名信息准确有效，如队伍中的选手信息不符合要求，组委会有权取消整个队伍的参赛资格及奖励。
                <br />
              </span>
            </div>
          </div>
        </div>
        <img
          className={`${styles.img3}`}
          src={
            require('./assets/img/pswbkja4cvuyaomebpfhshbyt07pa2xowge4a8b8f0-6521-4bc6-9db6-0811f6e15981.png')
          }
        />
        <div className={`${styles.main14} flex-col`}>
          <div className={`${styles.group2} flex-col justify-between`}>
            <div className={`${styles.layer8}`}>
              <span className={`${styles.word18}`}>为了保证大赛的公平性，将禁止以下类型人员报名参赛：</span>
              <span className={`${styles.word19}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className={`${styles.layer9} flex-row justify-between`}>
              <div className={`${styles.mod3} flex-col justify-between`}>
                <div className={`${styles.group3} flex-col`} />
                <div className={`${styles.group4} flex-col`} />
              </div>
              <div className={`${styles.mod4}`}>
                <span className={`${styles.info12}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={`${styles.paragraph5}`}>
                  大赛主办和技术支持单位如有机会接触赛题和相关数据的人员不允许参赛。
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赞助企业的在职人员（不含实习生）不允许参赛。
                  <br />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.main15} flex-col`}>
          <div className={`${styles.layer10} flex-row justify-between`}>
            <div className={`${styles.section3} flex-col`} />
            <div className={`${styles.section4} flex-col justify-between`}>
              <span className={`${styles.info13}`} id='GUESTS' >竞赛嘉宾</span>
              <div className={`${styles.main16} flex-col`}>
                <span className={`${styles.word20}`}>GUESTS</span>
              </div>
            </div>
          </div>
          <div className={`${styles.layer11} flex-row`}>
            <div className={`${styles.layer12} flex-col justify-end`}>
              <div className={`${styles.group5} flex-row justify-between`}>
                <div className={`${styles.main17} flex-col`} />
                <div className={`${styles.main18} flex-col`} />
                <div className={`${styles.main19} flex-col`} />
              </div>
              <div className={`${styles.group6} flex-row justify-between`}>
                <div className={`${styles.bd6} flex-col`} />
                <div className={`${styles.bd7} flex-col`} />
                <div className={`${styles.bd8} flex-col`} />
              </div>
            </div>
          </div>
          <div className={`${styles.layer13} flex-col`} />
          <div className={`${styles.layer14} flex-col`} />
          <div className={`${styles.layer15} flex-col`} />
        </div>
        <div className={`${styles.main20} flex-col`}>
          <div className={`${styles.layer16} flex-row`}>
            <span className={`${styles.word21}`}>3月22日&nbsp;–&nbsp;4月22日</span>
            <span className={`${styles.word22}`}>4月29日&nbsp;–&nbsp;5月21日</span>
            <span className={`${styles.word23}`}>6月中下旬</span>
          </div>
          <div className={`${styles.layer17} flex-row`}>
            <div className={`${styles.bd9} flex-col justify-center`}>
              <span className={`${styles.word24}`}>初赛</span>
            </div>
            <div className={`${styles.bd10} flex-col justify-center`}>
              <span className={`${styles.word25}`}>复赛</span>
            </div>
            <div className={`${styles.bd11} flex-col justify-center`}>
              <span className={`${styles.info14}`}>决赛</span>
            </div>
          </div>
        </div>
        <span className={`${styles.paragraph6}`}>
          本次大赛分为报名&amp;组队、初赛、复赛和决赛四个阶段，其中初赛均由参赛队伍下载数据在本地进行算法设计和调试，并通过大赛报名官网提交结果文件；复赛要求
          <br />
          参赛者在大赛官网平台上进行数据分析和处理，可使用平台提供的计算资源和工具包；决赛要求参赛者进行现场演示和答辩。
        </span>
        <div className={`${styles.main21} flex-col`} />
        <div className={`${styles.main22} flex-col`} />
        <div className={`${styles.main23} flex-col`} />
        <div className={`${styles.main24} flex-col`} />
        <div className={`${styles.main25} flex-col`} />
        <div className={`${styles.main26} flex-col`}>
          <div className={`${styles.layer18} flex-row justify-between`}>
            <div className={`${styles.outer10} flex-col`} />
            <div className={`${styles.outer11} flex-col justify-between`}>
              <span className={`${styles.txt10}`} id='PRIZES'>奖项设置</span>
              <div className={`${styles.box9} flex-col`}>
                <span className={`${styles.txt11}`}>PRIZES</span>
              </div>
            </div>
          </div>
          <div className={`${styles.layer19} flex-row`}>
            <span className={`${styles.txt12}`}>决赛奖项</span>
            <div className={`${styles.section5} flex-col`} />
            <span className={`${styles.word26}`}>奖金池</span>
            <span className={`${styles.word27}`}>100万</span>
            <div className={`${styles.section6}`}>
              <span className={`${styles.word28}`}>每个赛道的比赛奖金池均为</span>
              <span className={`${styles.word29}`}>50万元</span>
              <span className={`${styles.word30}`}>人民币，所有奖金均为税前金额。</span>
            </div>
          </div>
          <div className={`${styles.layer20} flex-row`}>
            <div className={`${styles.wrap3} flex-col`}>
              <div className={`${styles.layer21} flex-col`}>
                <div className={`${styles.mod5} flex-row`}>
                  <img
                    className={`${styles.label1}`}
                    src={
                      require('./assets/img/psbsa6eexb3pp0ejz62kn1i7ek3mpxh7b95621db-1a15-4e83-9983-bbaaa6438635.png')
                    }
                  />
                  <span className={`${styles.info15}`}>一等奖</span>
                  <div className={`${styles.wrap4} flex-col`}>
                    <span className={`${styles.word31}`}>数量:3</span>
                  </div>
                </div>
                <div className={`${styles.mod6} flex-col`} />
                <span className={`${styles.word32}`}>奖项设置：</span>
                <div className={`${styles.mod7}`}>
                  <span className={`${styles.txt13}`}>决赛第1名，决赛名次证书，奖金</span>
                  <span className={`${styles.info16}`}>¥15万元</span>
                </div>
                <div className={`${styles.mod8}`}>
                  <span className={`${styles.txt14}`}>决赛第2-3名，决赛名次证书，奖金</span>
                  <span className={`${styles.txt15}`}>¥8万元</span>
                </div>
              </div>
            </div>
            <div className={`${styles.wrap5} flex-col`}>
              <div className={`${styles.block8} flex-col`}>
                <div className={`${styles.layer22} flex-row`}>
                  <img
                    className={`${styles.icon1}`}
                    src={
                      require('./assets/img/ps5vnh07zhuq3jb209rm9hp42jfjqyyw14d6d1a459-f38e-4feb-9786-f871f7cdf116.png')
                    }
                  />
                  <span className={`${styles.txt16}`}>二等奖</span>
                  <div className={`${styles.layer23} flex-col`}>
                    <span className={`${styles.txt17}`}>数量:7</span>
                  </div>
                </div>
                <div className={`${styles.layer24} flex-col`} />
                <span className={`${styles.info17}`}>奖项设置：</span>
                <div className={`${styles.layer25}`}>
                  <span className={`${styles.info18}`}>决赛第4～6名，决赛名次证书，奖金</span>
                  <span className={`${styles.word33}`}>¥5万元</span>
                </div>
                <div className={`${styles.layer26}`}>
                  <span className={`${styles.info19}`}>复赛第7-10名，颁发证书，奖金</span>
                  <span className={`${styles.info20}`}>¥1万元</span>
                </div>
              </div>
            </div>
            <div className={`${styles.wrap6} flex-col`}>
              <div className={`${styles.layer27} flex-col`}>
                <div className={`${styles.mod9} flex-row`}>
                  <img
                    className={`${styles.label2}`}
                    src={
                      require('./assets/img/psjg3thu4mem0e5a6c13sqmi5a18ppcsftm6c99dd82-66cd-4dbc-8355-b4ec18339dd6.png')
                    }
                  />
                  <span className={`${styles.info21}`}>三等奖</span>
                  <div className={`${styles.block9} flex-col`}>
                    <span className={`${styles.txt18}`}>数量:10</span>
                  </div>
                </div>
                <div className={`${styles.mod10} flex-col`} />
                <span className={`${styles.word34}`}>奖项设置：</span>
                <span className={`${styles.word35}`}>复赛第11-20名，颁发证书</span>
              </div>
            </div>
          </div>
          <div className={`${styles.layer28} flex-row`}>
            <div className={`${styles.group7} flex-col`}>
              <div className={`${styles.main27}`}>
                <span className={`${styles.word36}`}>对于每个赛道，初赛最终排行榜的前</span>
                <span className={`${styles.word37}`}>10名</span>
                <span className={`${styles.infoBox5}`}>
                  队伍，
                  <br />
                  颁发初赛名次证书。
                </span>
              </div>
            </div>
            <div className={`${styles.group8} flex-col`}>
              <div className={`${styles.TextGroup707} flex-col justify-between`}>
                <span className={`${styles.txt19}`}>在每个赛道的初赛阶段，设立周周星奖励：</span>
                <div className={`${styles.layer29}`}>
                  <span className={`${styles.infoBox6}`}>
                    从初赛第三周开始，以每周一中午12点的排行榜为准，
                    <br />
                  </span>
                  <span className={`${styles.paragraph7}`}>
                    取前两名参赛队伍发放周周星纪念礼物；对于前面已
                    <br />
                  </span>
                  <span className={`${styles.word38}`}>经获得周周星的队伍，不重复发放，名额按</span>
                  <span className={`${styles.txt20}`}>名次顺延。</span>
                </div>
              </div>
            </div>
            <div className={`${styles.group9} flex-col`}>
              <div className={`${styles.TextGroup708} flex-col justify-between`}>
                <span className={`${styles.txt21}`}>招聘绿色通道</span>
                <div className={`${styles.box10}`}>
                  <span className={`${styles.txt22}`}>复赛排名</span>
                  <span className={`${styles.info22}`}>前20</span>
                  <span className={`${styles.paragraph8}`}>
                    获奖队伍中的在校学生，将获得
                    <br />
                    2022年京东集团
                  </span>
                  <span className={`${styles.txt23}`}>校园招聘</span>
                  <span className={`${styles.word39}`}>和</span>
                  <span className={`${styles.paragraph9}`}>
                    实习招聘绿色通
                    <br />道
                  </span>
                  <span className={`${styles.info23}`}>资格，具体细则另行通知</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.layer30} flex-col`}>
            <span className={`${styles.word40}`}>初赛奖项</span>
          </div>
          <div className={`${styles.layer31} flex-col`}>
            <span className={`${styles.word41}`}>周周星</span>
          </div>
          <div className={`${styles.layer32} flex-col`}>
            <span className={`${styles.info24}`}>其他激励</span>
          </div>
        </div>
        <div className={`${styles.main28} flex-col`}>
          <div className={`${styles.layer33} flex-col justify-between`}>
            <div className={`${styles.box11} flex-col`} id='OTHERS'/>
            <span className={`${styles.paragraph10}`}>
              全球人工智能技术创新大赛组织委员会
              <br />
              2022年2月
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WebView;
