/* eslint-disable jsx-a11y/alt-text */
'use strict';

import React, { FC, useEffect, useState } from 'react';

import styles from './assets/index.module.css';

const MobileView: FC = () => {
  const [selectedKey, setSelectedKey] = useState<any>('COMPETITION');

  useEffect(() => {
    var element = document.getElementById(selectedKey);
    if (element)
      element.scrollIntoView();
  }, [selectedKey])

  return (
    <div className={`${styles.page} flex-col`}>
      <div className={`${styles.box1} flex-col`}>
        <div className={`${styles.block1} flex-col`} />
        <div className={`${styles.block2} flex-col`}>
          <div className={`${styles.group1} flex-col`}>
            <img
              className={`${styles.pic1}`}
              src={
                require('./assets/img/pszylulv7sub80blt09petuzyawoplivd870bd0dcc-d3b6-453b-bf66-f4fd9fde8b00.png')
              }
            />
            <img
              className={`${styles.img1}`}
              src={
                require('./assets/img/ps9khmy54rok6motueuclf0rt9w4qvdxaqlfd9a2385-4601-4ad2-b205-68ad4595a646.png')
              }
            />
            <img
              className={`${styles.pic2}`}
              src={
                require('./assets/img/psw3xxrs132wp8tyl1pwt6zfdtajunrw2f719704e47-18a6-4b29-85dd-4d359eeefa17.png')
              }
            />
          </div>
        </div>
        <div className={`${styles.block3} flex-col`}>
          <div className={`${styles.group2} flex-col`}>
            <div className={`${styles.group3} flex-col`}>
              {/* <div className={`${styles.block4} flex-row justify-between`}>
                <div className={`${styles.bd1} flex-col`} />
                <img
                  className={`${styles.img2}`}
                  src={
                    require('./assets/img/psoybsnygkyicv21put26oso4m31yub25e8bbf-6373-428b-b1f7-fd65fbec8f22.png')
                  }
                />
              </div> */}
            </div>
            <div className={`${styles.group4} flex-col`}>
              <div className={`${styles.outer1} flex-col`}>
                <div className={`${styles.outer2} flex-row justify-between`}>
                  <div className={`${styles.mod1} flex-col`} />
                  <div className={`${styles.mod2} flex-col justify-between`}>
                    <span className={`${styles.word1}`} id='SETUP'>赛道设置</span>
                    <div className={`${styles.box2} flex-col`}>
                      <span className={`${styles.info1}`}>SET&nbsp;&nbsp;UP</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.outer3}`}>
                  <span className={`${styles.paragraph1}`}>
                    本次大赛将设置电商关键属性的图文匹配和商品标题实体识别两个
                    <br />
                  </span>
                  <span className={`${styles.word2}`}>智能算法赛道，具体说明详见附件“赛题描述”。</span>
                </div>
                <div className={`${styles.outer4} flex-col`}>
                  <span className={`${styles.word3}`}>电商关键属性的图文匹配</span>
                </div>
                <div className={`${styles.outer5} flex-col`}>
                  <div className={`${styles.outer6}`}>
                    <span className={`${styles.paragraph2}`}>
                      电商平台中商品主图和商品标题是最直观、最容易触达到用
                      <br />
                    </span>
                    <span className={`${styles.paragraph3}`}>
                      户的数据。因此，图文的一致性至关重要，要求模型根据图
                      <br />
                    </span>
                    <span className={`${styles.infoBox1}`}>
                      片和文本判断出两种模态数据传递的信息是否一致。本赛题
                      <br />
                    </span>
                    <span className={`${styles.paragraph4}`}>
                      要求参赛队伍通过商品图片与商品标题在商品关键属性上的
                      <br />
                    </span>
                    <span className={`${styles.txt1}`}>关联程度来判断两者是否匹配</span>
                  </div>
                  <div className={`${styles.outer8} flex-col`} onClick={() => {
                    window.open(`https://www.heywhale.com/home/competition/620b34c41f3cf500170bd6ca`)
                  }}>
                    <span className={`${styles.info2}`}>报名入口</span>
                  </div>
                </div>
                <div className={`${styles.outer7} flex-col`}>
                  <div className={`${styles.section1}`}>
                    <span className={`${styles.paragraph5}`}>
                      电商平台商品标题实体识别是NLP应用中的一项核心基础任
                      <br />
                    </span>
                    <span className={`${styles.infoBox2}`}>
                      务，可为多种下游场景所复用，从标题文本中准确抽取出商
                      <br />
                    </span>
                    <span className={`${styles.paragraph6}`}>
                      品相关实体能够提升检索、推荐等业务场景下的用户体验和
                      <br />
                      平台效率。本赛题要求选手使用模型抽取出商品标题文本中
                      <br />
                    </span>
                    <span className={`${styles.txt2}`}>的实体</span>
                  </div>
                  <div className={`${styles.outer8} flex-col`} onClick={() => {
                    window.open(`https://www.heywhale.com/home/competition/620b34ed28270b0017b823ad`)
                  }}>
                    <span className={`${styles.info2}`}>报名入口</span>
                  </div>
                </div>
                <span className={`${styles.word4}`}>参赛对象</span>
              </div>
              <div className={`${styles.outer9} flex-col justify-center`}>
                <span className={`${styles.txt3}`}>01</span>
              </div>
              <div className={`${styles.outer10} flex-col`}>
                <span className={`${styles.info3}`}>02</span>
              </div>
              <div className={`${styles.outer11} flex-col`}>
                <span className={`${styles.word5}`}>商品标题实体识别</span>
              </div>
            </div>
            <div className={`${styles.group5} flex-col`}>
              <div className={`${styles.section2} flex-col justify-between`}>
                <div className={`${styles.outer12}`}>
                  <span className={`${styles.infoBox3}`}>
                    本次大赛面向全球开放，不限年龄国籍，高等院校在校
                    <br />
                    学生（包括高职高专、本科、研究生）以及科研机构和
                    <br />
                    企业从业人员均可参赛。具体要求如下：
                    <br />
                  </span>
                  <span className={`${styles.info4}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div className={`${styles.outer13} flex-row justify-between`}>
                  <div className={`${styles.bd2} flex-col justify-between`}>
                    <div className={`${styles.outer14} flex-col`} />
                    <div className={`${styles.outer15} flex-col`} />
                  </div>
                  <div className={`${styles.bd3}`}>
                    <span className={`${styles.word6}`}>&nbsp;</span>
                    <span className={`${styles.infoBox4}`}>
                      可以自由组队参赛，具体组队要求见赛道相关说明；
                      <br />
                      &nbsp;参赛选手应保证报名信息准确有效，如队伍中的选手信
                      <br />
                      &nbsp;息不符合要求，组委会有权取消整个队伍的参赛资格及
                      <br />
                      &nbsp;奖励。
                      <br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.group6} flex-col`}>
              <div className={`${styles.box3} flex-col justify-between`}>
                <div className={`${styles.block5}`}>
                  <span className={`${styles.txt4}`}>为了保证大赛的公平性，将禁止以下类型人员报名参赛：</span>
                  <span className={`${styles.word7}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div className={`${styles.block6} flex-row justify-between`}>
                  <div className={`${styles.section3} flex-col justify-between`}>
                    <div className={`${styles.layer1} flex-col`} />
                    <div className={`${styles.layer2} flex-col`} />
                  </div>
                  <div className={`${styles.section4}`}>
                    <span className={`${styles.paragraph9}`}>
                      &nbsp;大赛主办和技术支持单位如有机会接触赛题和相关数据
                      <br />
                      &nbsp;的人员不允许参赛。
                      <br />
                      &nbsp;赞助企业的在职人员（不含实习生）不允许参赛。
                      <br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.group7} flex-row justify-between`}>
              <div className={`${styles.main1} flex-col`} />
              <div className={`${styles.main2} flex-col justify-between`}>
                <span className={`${styles.word8}`}>竞赛嘉宾</span>
                <div className={`${styles.section5} flex-col`}>
                  <span className={`${styles.word9}`}>GUESTS</span>
                </div>
              </div>
            </div>
            <div className={`${styles.group8} flex-row justify-between`}>
              <img
                className={`${styles.pic3}`}
                src={
                  require('./assets/img/ps8qpes9vxf096ju7mndpeglxukusfv2w08478ac8-26d9-4368-bce8-f8723ac03f79.png')
                }
              />
              <img
                className={`${styles.pic4}`}
                src={
                  require('./assets/img/psqws5b1k17aeajajpeup710zyukcc6b6q5392455c-1434-47c0-aa1d-9d355adfe1f0.png')
                }
              />
            </div>
            <div className={`${styles.group9} flex-col`}>
              <div className={`${styles.bd4} flex-col justify-between`}>
                <div className={`${styles.mod3} flex-col`}>
                  <img
                    className={`${styles.img3}`}
                    src={
                      require('./assets/img/ps1k0ce4rpx762zrdpn8651ec7nei7bqd5rba554e4a-3c5c-4c03-8abc-75187b49e811.png')
                    }
                  />
                </div>
                <div className={`${styles.mod4} flex-row justify-between`}>
                  <div className={`${styles.outer16} flex-col`} />
                  <div className={`${styles.outer17} flex-col justify-between`}>
                    <span className={`${styles.txt5}`}>赛制说明</span>
                    <div className={`${styles.mod5} flex-col`}>
                      <span className={`${styles.txt6}`}>INTRODUCTION</span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={`${styles.img4}`}
                src={
                  require('./assets/img/ps9rw7s28gwa95iiz8ezhtmfd19se9wvlaf787314e2-98bf-49c2-b1b9-5cda7aa589b6.png')
                }
              />
            </div>
            <div className={`${styles.group10} flex-row justify-between`}>
              <div className={`${styles.outer18} flex-col`} />
              <div className={`${styles.outer19} flex-col justify-between`}>
                <span className={`${styles.word10}`}>奖金设置</span>
                <div className={`${styles.layer3} flex-col`}>
                  <span className={`${styles.txt7}`}>PRIZES</span>
                </div>
              </div>
            </div>
            <div className={`${styles.group11} flex-row`}>
              <span className={`${styles.info5}`}>决赛奖项</span>
              <div className={`${styles.box4} flex-col`} />
              <span className={`${styles.word11}`}>奖金池</span>
              <span className={`${styles.txt8}`}>100万</span>
            </div>
            <div className={`${styles.group12}`}>
              <span className={`${styles.txt9}`}>每个赛道的比赛奖金池均为</span>
              <span className={`${styles.word12}`}>50万元</span>
              <span className={`${styles.word13}`}>人民币，所有奖金均为税前金额。</span>
            </div>
            <div className={`${styles.group13} flex-col`}>
              <div className={`${styles.mod6} flex-col`}>
                <div className={`${styles.bd5} flex-col`}>
                  <div className={`${styles.bd6} flex-row`}>
                    <img
                      className={`${styles.icon1}`}
                      src={
                        require('./assets/img/psjhiw3h6fxvjvqheztbnlj4c8l74nvcqle83d1a0a-9c68-44b0-b588-367c63e79ffd.png')
                      }
                    />
                    <span className={`${styles.word14}`}>一等奖</span>
                    <div className={`${styles.wrap1} flex-col`}>
                      <span className={`${styles.word15}`}>数量:3</span>
                    </div>
                  </div>
                  <div className={`${styles.bd7} flex-col`} />
                  <span className={`${styles.word16}`}>奖项设置：</span>
                  <div className={`${styles.bd8}`}>
                    <span className={`${styles.txt10}`}>决赛第1名，决赛名次证书，奖金</span>
                    <span className={`${styles.word17}`}>¥15万元</span>
                  </div>
                  <div className={`${styles.bd9}`}>
                    <span className={`${styles.info6}`}>决赛第2-3名，决赛名次证书，奖金</span>
                    <span className={`${styles.word18}`}>¥8万元</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.mod7} flex-col`}>
                <div className={`${styles.box5} flex-col`}>
                  <div className={`${styles.mod8} flex-row`}>
                    <img
                      className={`${styles.label1}`}
                      src={
                        require('./assets/img/ps5o7e7g6a5ti0xbthbokay96uglcd1g09eff8c1-bf33-4da4-b9b7-aca28a0d9bb4.png')
                      }
                    />
                    <span className={`${styles.word19}`}>二等奖</span>
                    <div className={`${styles.group14} flex-col`}>
                      <span className={`${styles.word20}`}>数量:7</span>
                    </div>
                  </div>
                  <div className={`${styles.mod9} flex-col`} />
                  <span className={`${styles.word21}`}>奖项设置：</span>
                  <div className={`${styles.mod10}`}>
                    <span className={`${styles.info7}`}>决赛第4～6名，决赛名次证书，奖金</span>
                    <span className={`${styles.word22}`}>¥5万元</span>
                  </div>
                  <div className={`${styles.mod11}`}>
                    <span className={`${styles.info8}`}>复赛第7-10名，颁发证书，奖金</span>
                    <span className={`${styles.word23}`}>¥1万元</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.mod12} flex-col align-center`}>
                <div className={`${styles.bd10} flex-col`}>
                  <div className={`${styles.layer4} flex-row`}>
                    <img
                      className={`${styles.label2}`}
                      src={
                        require('./assets/img/psew6ws2e8mhnyu00tli35gkh87hopa8ibfb883f3-3e25-4e44-8017-d308575fa4eb.png')
                      }
                    />
                    <span className={`${styles.info9}`}>三等奖</span>
                    <div className={`${styles.section6} flex-col`}>
                      <span className={`${styles.word24}`}>数量:11</span>
                    </div>
                  </div>
                  <div className={`${styles.layer5} flex-col`} />
                  <span className={`${styles.info10}`}>奖项设置：</span>
                  <span className={`${styles.info11}`}>复赛第11-20名，颁发证书</span>
                </div>
              </div>
            </div>
            <div className={`${styles.group15} flex-col`}>
              <div className={`${styles.section7}`}>
                <span className={`${styles.word25}`}>对于每个赛道，初赛最终排行榜的前</span>
                <span className={`${styles.word26}`}>10名</span>
                <span className={`${styles.paragraph10}`}>
                  队伍，颁发初赛
                  <br />
                  名次证书
                </span>
                <span className={`${styles.info12}`}>。</span>
              </div>
            </div>
            <div className={`${styles.group16} flex-col`}>
              <div className={`${styles.outer20} flex-col justify-between`}>
                <span className={`${styles.word27}`}>在每个赛道的初赛阶段，设立周周星奖励：</span>
                <div className={`${styles.section8}`}>
                  <span className={`${styles.word28}`}>从初赛第三周开始，以每周一中午12点的排行榜为准，</span>
                  <span className={`${styles.paragraph11}`}>
                    取前两名参赛
                    <br />
                    队伍发放周周星纪念礼物；对于前面已
                  </span>
                  <span className={`${styles.paragraph12}`}>
                    经获得周周星的队伍，不重复
                    <br />
                    发放，名额按名次顺延。
                  </span>
                </div>
              </div>
            </div>
            <div className={`${styles.group17} flex-col`}>
              <div className={`${styles.box6}`}>
                <span className={`${styles.txt11}`}>复赛排名</span>
                <span className={`${styles.word29}`}>前20</span>
                <span className={`${styles.paragraph13}`}>
                  获奖队伍中的在校学生，将获得2022年京东集
                  <br />团
                </span>
                <span className={`${styles.txt12}`}>校园招聘</span>
                <span className={`${styles.txt13}`}>和</span>
                <span className={`${styles.word30}`}>实习招聘绿色通道</span>
                <span className={`${styles.info13}`}>资格，具体细则另行通知</span>
              </div>
            </div>
            <img
              className={`${styles.img5}`}
              src={
                require('./assets/img/ps6i5g7zi9gtkcja5mtzyy859zul4t8fwxf3e9bd7f-1698-4ad0-ad46-09b90e153889.png')
              }
            />
          </div>
          <img
            className={`${styles.pic5}`}
            src={
              require('./assets/img/psvnmjtmxnsb7pnri42m1p4t86t17cgjwr3b977fd8-03c8-4872-9b9d-82292048c600.png')
            }
          />
          <div className={`${styles.group18} flex-col`}>
            <div className={`${styles.main3} flex-row`}>
              <img
                className={`${styles.img6}`}
                src={
                  require('./assets/img/psfnhx1hak35ly12qzmgqmr0leb4e7bfj3d625297-b415-4324-8f85-970149ca80ba.png')
                }
              />
              <img
                className={`${styles.img6_1}`}
                src={
                  require('./assets/img/rencai-logo.png')
                }
              />
            </div>
            <div className={`${styles.main4} flex-row`}>
              <div className={`${styles.main5} flex-col`} onClick={() => {
                var element = document.getElementById('SETUP');
                if (element)
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}>
                <span className={`${styles.word31}`}>报名参赛</span>
              </div>
            </div>
            <div className={`${styles.main6} flex-row`}>
              <span className={`${styles.info14}`}>算法挑战赛</span>
            </div>
            <div className={`${styles.main7} flex-row`}>
              <div className={`${styles.group19} flex-col`} />
            </div>
            <div className={`${styles.main8} flex-col`} />
            <div className={`${styles.main9} flex-col`}>
              <div className={`${styles.mod13} flex-row justify-between`}>
                <span className={`${styles.info15}`}>2022</span>
                <div className={`${styles.bd11} flex-col`} />
                <span className={`${styles.paragraph14}`}>
                  HANGZHOU GLOBAL&nbsp;AI
                  <br />
                  INNOVATION&nbsp;CONTEST
                </span>
              </div>
            </div>
          </div>
          <span className={`${styles.paragraph15}`}>
            杭州全球人工智能技术
            <br />
            创新大赛&nbsp;
          </span>
          <div className={`${styles.group20} flex-col`}>
            <div className={`${styles.main10} flex-col`}>
              <div className={`${styles.mod14} flex-row justify-between`}>
                <div className={`${styles.box7} flex-col`} />
                <div className={`${styles.box8} flex-col justify-between`}>
                  <span className={`${styles.word32}`}>大赛介绍</span>
                  <div className={`${styles.mod15} flex-col`}>
                    <span className={`${styles.word33}`}>COMPETITION</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.mod16} flex-col align-center`}>
                <div className={`${styles.wrap2}`}>
                  <span className={`${styles.paragraph16}`}>
                    2022杭州全球人工智能技术创新大赛-算法挑战赛由中国人工智能学
                    <br />
                  </span>
                  <span className={`${styles.paragraph17}`}>
                    会、杭州市人民政府主办，余杭区人民政府、杭州市委组织部（人才
                    <br />
                    办）、杭州市科技局承办，浙江杭州未来科技城（海创园）管委会具
                    <br />
                    体承办，京东零售协办。大赛将立足国际视野，聚焦前沿科技与应用
                    <br />
                    创新，推进人工智能领域的学术交流、人才培养、技术发展以及跨界
                    <br />
                  </span>
                  <span className={`${styles.info16}`}>应用与融合打造人工智能的人才交流平台与产业生态圈。</span>
                </div>
              </div>
              <div className={`${styles.mod17}`}>
                <span className={`${styles.info17}`}>算法挑战赛，两大赛道，</span>
                <span className={`${styles.info18}`}>100万</span>
                <span className={`${styles.info19}`}>高额奖金，</span>
                <span className={`${styles.word34}`}>京东offer</span>
                <span className={`${styles.word35}`}>机会</span>
              </div>
            </div>
          </div>
          <div className={`${styles.group21} flex-col align-center`}>
            <div className={`${styles.box9} flex-col justify-between`}>
              <span className={`${styles.txt14}`}>赛道一</span>
              <span className={`${styles.txt15}`}>电商关键属性的图文匹配</span>
            </div>
          </div>
          <div className={`${styles.group22} flex-col`}>
            <div className={`${styles.mod18} flex-col justify-between`}>
              <span className={`${styles.info20}`}>赛道二</span>
              <span className={`${styles.word36}`}>商品标题实体识别</span>
            </div>
          </div>
          <div className={`${styles.group23} flex-col`} />
          <div className={`${styles.group24} flex-col`}>
            <span className={`${styles.info21}`}>PARTICIPANTS</span>
          </div>
          <div className={`${styles.group25} flex-col align-center`}>
            <div className={`${styles.section9} flex-row justify-between`}>
              <div className={`${styles.block7} flex-col`} />
              <div className={`${styles.block8} flex-col`} />
            </div>
          </div>
          <img
            className={`${styles.img7}`}
            src={
              require('./assets/img/psjx3hzbtfu66mhttlcb0c97791gv4l2uq79e4d8c0-6a11-49fc-9d51-7f8723bbd2cc.png')
            }
          />
          <img
            className={`${styles.pic6}`}
            src={
              require('./assets/img/psvgnd50ujkr61wqwxyplttz553pcfmenh67c3454b-b3fb-47dd-b92e-b8cedbeaa6db.png')
            }
          />
          <img
            className={`${styles.pic7}`}
            src={
              require('./assets/img/pstdfuhpksyyr9b56u5s28pnx0kbf6mp3bf1d4b2de-5f65-428a-b2a8-62db0b117dc4.png')
            }
          />
          <div className={`${styles.group26} flex-col`}>
            <div className={`${styles.wrap3} flex-row justify-between`}>
              <div className={`${styles.outer21} flex-col`} />
              <div className={`${styles.outer22} flex-col`} />
              <div className={`${styles.outer23} flex-col`} />
            </div>
          </div>
          <img
            className={`${styles.img8}`}
            src={
              require('./assets/img/ps6w9jydgljhbn8m8x6frkf6xtpg8hce6a0b9acc-0558-4d61-a71b-0f953738da82.png')
            }
          />
          <div className={`${styles.group27} flex-col`}>
            <div className={`${styles.outer24} flex-row justify-between`}>
              <div className={`${styles.bd12} flex-col`} />
              <div className={`${styles.bd13} flex-col`} />
              <div className={`${styles.bd14} flex-col`} />
            </div>
          </div>
          <div className={`${styles.group28} flex-col align-center`}>
            <div className={`${styles.wrap4} flex-col justify-between`}>
              <div className={`${styles.block9}`}>
                <span className={`${styles.infoBox5}`}>
                  本次大赛分为报名&amp;组队、初赛、复赛和决赛四个阶段，其中
                  <br />
                </span>
                <span className={`${styles.paragraph18}`}>
                  初赛均由参赛队伍下载数据在本地进行算法设计和调试，并通
                  <br />
                  过大赛报名官网提交结果文件；复赛要求参赛者在大赛官网平
                  <br />
                </span>
                <span className={`${styles.infoBox6}`}>
                  台上进行数据分析和处理，可使用平台提供的计算资源和工具
                  <br />
                </span>
                <span className={`${styles.txt16}`}>包；决赛要求参赛者进行现场演示和答辩。</span>
              </div>
              <div className={`${styles.block10} flex-row justify-between`}>
                <div className={`${styles.block11} flex-col`}>
                  <span className={`${styles.word37}`}>报名&amp;组队</span>
                  <div className={`${styles.mod19}`}>
                    <span className={`${styles.txt17}`}>初赛</span>
                    <span className={`${styles.word38}`}></span>
                  </div>
                  <span className={`${styles.info22}`}>复赛</span>
                  <span className={`${styles.info23}`}>决赛</span>
                </div>
                <div className={`${styles.block12} flex-col`} />
                <div className={`${styles.block13} flex-col`}>
                  <span className={`${styles.info24}`}>2月25日&nbsp;–&nbsp;4月21日</span>
                  <span className={`${styles.word39}`}>3月22日&nbsp;–&nbsp;4月22日</span>
                  <span className={`${styles.txt18}`}>4月29日&nbsp;–&nbsp;5月21日</span>
                  <span className={`${styles.word40}`}>11月26日</span>
                </div>
              </div>
            </div>
            <div className={`${styles.wrap5} flex-col`} />
            <div className={`${styles.wrap6} flex-col`} />
            <div className={`${styles.wrap7} flex-col`} />
            <div className={`${styles.wrap8} flex-col`} />
          </div>
          <div className={`${styles.group29} flex-col`}>
            <span className={`${styles.info25}`}>初赛奖项</span>
          </div>
          <div className={`${styles.group30} flex-col justify-center`}>
            <span className={`${styles.word41}`}>周周星</span>
          </div>
          <div className={`${styles.group31} flex-col`}>
            <span className={`${styles.word42}`}>其他激励</span>
          </div>
          <div className={`${styles.group32} flex-col`}>
            <span className={`${styles.infoBox7}`}>
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
export default MobileView;
