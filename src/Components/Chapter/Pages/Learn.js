import React, { useContext } from 'react'


import { useLocation, useNavigate } from 'react-router-dom'

import './Learn.css'

// import { ChapterData_1 } from '../../Subject/Chapter Data/ChapterData'

import { context_data_2 } from '../../Subject/SubjectData'
import ScrollBAr from '../ComponentsOfChapeters/ScrollBAr'
import TestPage from './TestPage'



export default function Learn() {

  const navigate = useNavigate();

  const dataFromSession = localStorage.getItem("chapter data") // Taking data from storage

  const dataConver = JSON.parse(dataFromSession) // Converting data from json to Object

  console.log("we are under the Learn components", dataConver.chapterData.content.learn)

  const learn_data = dataConver.chapterData.content.learn

  return (

    (learn_data.length == 0)

      ?

      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhQYGBgaGRkYGBkYGBgaHBgYGhgcGhoYGRgcIS4lHR4rIxkaJjgoKy8xNjY1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xABJEAACAQMCBAQCBQgGBgsAAAABAgADBBESIQUGMUEHEyJRYXEUMoGRoSNCUmJygrHwFTOys8HhJDVTkqPEFhdGc3SDk6LCw/H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuaIiAiIgIiICIiAiIgJiZiAiIgIiICIiAmJmIGJmIgIiICIiAmJmICIiAiIgIiICIiAiIgIiICIiAiJgQMxEQEREBERARExAzE46jhQSxAAGSScAAdST2kaTn/hLVBSW8pliQBjVpJJwBrxp/GBKYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJ8gY6QOOtVVFZ3YKqglmJwAAMkknoAJUD8+VL3i1BKQJtadU6VU4NY4Kq7bgHDFWVfgD8s+MHOv1+GW/6v0hwfkwpLjrtjV88e8qG3rlHDgkEEEYMD18jg5wQcHBx2I6icFa/opSNZ6iLTUElyw0gDYnV0nnrmLxCuq1FLWhVdERSrunoarkjAOACqqBjAxnJzIqtxWqItJqjtTX6qF2KrjP1VJwOp6e8D07y1zNb8RWq9uxK06nl5Oxb0qwcL1CnJAz10mb2eXeTuZKnDbsVFYmmxAqoCcOozjPxGSRPQ/B+Y7a7RHpVNqh0oG2YsAxIKncfUbc7HG0DdxEQEwZjJld+MnFKlC0prTZlFRyGIIAOkZCnv1Ofb079oEU8auZ6rVxw+m2mmqq7lW/rGYbK2D9UDsepOewlYWrAEHAJBBwe/2RUQuS3vvv3+M5uEUtVZFP6Q/naB6W5I4k1eypFwQyoFOcDUFyoYAdB6SO24MkkiXJ3BFt0RkKliCKr4Yk4+rTpk40qDuTg5II+UtgIiYgZiaaz40lS7q2ox+TVSD+k2fWPkNSD56puYCIiAmJmICIiAiIgYmYiAiIgIiICIle+LnMN3Y2tM2p0a3KtVA3UgBlVc7DVht99lI7wLCkU8QuaRw2zaouDVc6KKnf1kZLEeyjf54HeVPyT4kXVG5ze13q0XID6vUU22dPbHcDYjO2ZuvGbjtjc0bZKNRatQMzgowIWmyYw2OhY6SB19JgVPeXL1qjVajFmdi7sepZjkn8ZwYn3iZKbZgKSZnZdivpXb3PvOKmcTsLSzA62ok57iTPkCqiVkJbDBw2rJ6bDA642JGcbfZIq9LAmLW7qUKi1KZwykMPmDA9as4AyTgAZJPTHuTI/Yc68OuLj6LSuUervgAMFYjsrkaWPwBPeVZz14ni8tVtrVWQVFH0hmAB6DNNMHpnOTtkYHcysKZIIIOCDsRsQexB7QPY0pTxy4lRdqNFWDumrUoOyZwf8AeOBkdsD3kbreJXFTbii1Ud81FULUYHoCw6Y9wAfjIW2WJZiST1JgcgrMdug9hMB2RgysVYEEMCQQRuCCOhzMKuJ8uMwPTvInMS8Qs0qk/lFVVrDp6wN2A/RbBI+7tJNPJfB+NXVk/mWtZqbEYOnBDD9ZWBU/aJPKPjLfClpahSZ/9pllB3/R6dNusC8bm6p0hqqMqj3YgSPcT5ztKS4pOtZznCowIHXdm6AZ7ddxtKE4xzHxHiJy7PUUZGmmpKjO5G32fPAmkta729VXC4ZCCVYEZ76WHXB/xgXRyqlR7xHydWWdzuCQ/pY/e4MtUStv+snhdC1FxRXNZ9OaCgqwfSAdRIwFGkDUM5x3MiHDuc7y+4lbGq+aRrKBQQsibnClgvqfSSrerOdPYGBfMSqvEfxANIVLO11K4Oh6wYDH6QplTnUDtk4wQdjInyP4kPYLUp3S1K6N60JfLK+MEEufqtt32x0OYHoGJ5/4Z4p8R+la6rK9Jnw1IIAEU5ACOBqB36knpLz4bfpcUkrIfS66hnqOxB+IOQYHdiIgIiICIiAiIgIiICaTmrgtK/tHtqp0hsaW2yr59BGe+cD45I7zdTMDx5dWz0qj06ilXRirq2xDKSCCPmJ8rJ94yNbNfrUoFWLJ+V04wWViNWcbkjAzuPTIDTgfapOyU9IM+SnQTuUaJfCUwzsxwqoCzMT2VQMsfgIHWoUdTTbU7UD2Jkq4b4Z8SZQ5SmhI+q9TDfaEDAffOCz5Wuql21kqr5ifXbVlEXAbUWA/WGw3yfngIpf0sCa3RL1peE1qw/LXFZmxvo8tFz7gMjH8ZBufORTw3TUp1GqUXJUFwNSPgkKdIAOQCQQB9Uj5hAGpgT5p0SxAUFiTsAMk/IDrPSfK3KtgtpbubSgXajSLO1NGZmKKWYlgdyd5oP6FVOZ0ZVCr9H88BQAMhTQ2A6dvvgVHT5bv2Rn+i1wiKWZmpuqhQCScsANgCZ2+WuS7ziKu9sqFUbQzO4UBsBsYwSdiO09HcdXVaV196NQfejSBeCA/0W4PvWB/4aj/AAgVza8kVjxMcMqVUV8ZLqGdR+S8zAB0k7bdpuOcfDE8PszdU65rFGXzBoCgU221AamOzFe/Qk9pJ/LP/SvV+r/yksu+s0r0no1BlHVkYe6sCD/GBWPK3h7w6rw2ldVabPUeiXOajhdWk9FUgYke8JOTKV4XurpA9NCFRG+q1QgMSw/OVQV26Etv0ls8F4e1tw1bZ92p0nQn9LTqAP2jB+2ajwjohOE08d3qk/MVGX+CiBuL7mTh9m4oVK9OmwA9A/NGNshRhdsdcdpRfiPepecTqVKbh6YCIjLuCqopYj94vJjw3l+24jxa/W7ZvTUOhVfQW9TLj3OFQdJ0vEzlq0sPowtaZTX5usl3ctp0Y3cnGNR6e8CuGtlCkDJPvOAUypBBIIwQQSCCNwQexmwqDIwJxrT2gdSu9So2qozOcnJYkkknJJJ6nfrPk0szvaJ8sPhA6i+k+02lhxFqbZLdsAnfH2/z0mvdfwnKiADeBdvDvFK18oedSqI4UelArqxx+a2Rj97HXvJhwLjlC9p+ZbvqAOGBBDK2M4ZT/Hoe08vu5HTIk48JuMOl+tMjUKuaZ3II21BsAb40/iTmBf0REBERAREQERECN86800+G2/mMNTuStNP0mG5J/VUbn7B3lNcV8TrqsjU/Vhzlzq05GNkVQPSo3zvltsyz/EzlStxGlT8jSXplzpYlSwcAelumRp6H7/eqk8LOK5/qFAyF9VSn3P1sKx9O8CHX101aoajYHYAdAB0E4kbEnN/4WcUoqGFKnVzsVpPll2zk6gu22Nid5Ca9B6bFHVkYdVdSrD2yCMwGoy4vA/gysKt64yynyaefzfSGdh8SGUZ/a9zKgopky/vBnH9GsB2rvn56UP8ADEBzV4ifQ7pranQFTRp8xmcrgsoYKAFPZl3+M7Phs/nrdXrKA1e4bvnCIo0LnvjWwzK08QaTji1whBy7U2UDqwNJcFR1O4I/dMsXwhqf6HUpMCr067K6sCGBKKdwdxvkb91MDScY5ruk42tBarCkLihR0DGkrUKK5O25y7HPwEkniygPCapPVXokfM1kU/gxkd4lyheVOOCuKZ8jz6NfzdSYCpoYrjOrOpCOncHpNp4zX6pw8UM+qq67fqU/yhb5Bgg/egS7h1UUrSgW6BKCfa2hB+LTkbhym7W621Ci1H44Z1f/AOM0/N9Y0eEVKi9adOmw+aMhH8JIKl2i0jWz6AhqZ/VC6s/dA6orivb1G7Hz027hHdM/+2QzwZQC0q4/2in/AIazYcn8bt04XQNzcUkdkYsHqIpyzsTsTnqZEfDPmm0sbWol05R2dSqqjuSBTUHdVIG4PUwNv/2o+z/lJJOP8bNpf2aM2KdYVabjsHLUvLf7CSvyc+0rx+Z6Z4z9OpU6lRTsqKvrY+R5ey799/lO5zknEeKeWycOrU1QOBqZdTa9O5BClcaPj1gWxff1T/sN/ZMgHg7xVHtWtCQHpsXVfem+DqHvhtQPtlfeRbiHP3FqebeqqU2CBW1UmDkacazqJBzgnIGOuJHuW+G3VzcJTtNQqAatYdk8tRsXZxuo3A2yTnGDAup+VrGle/0ixK1C22p8J5jr5eQD+c2rGM4JPTMhvjNcIzWoVlYgVsgEEjPl4zjp0/Cb+n4erVVfp15c3DDsXIQHH5qtqI+eZ1eJ+Fdo1M/Rmek+NtTa0J9nBGcfEH74FNBd5yKurpvtvjfYe8k3JnDyvFaVCugJWpUR0cBhlKb9QdiMgEH5GXuLamFKBFCkEFQAAQRgjA7QPNFhw+rcOKdFGdyCQq9SBuZ3uKcpX9rQNzcUPLRSq7vTLEsdIwqMT1MlnKHCms+Pm2OdNNavlk/nIygo2e50kA/EGTDxZ/1XU/bpf3ggUEo33nJpE5APhMH5bwOEUtX8JYPhPw4/TlqBThVffGwJQjr2O/4yH21Dp+Mtrwv4kBRailJm/KamZSgChlUKSGYMR6TnGcbe8CxonyDncT6gIiICIiAiIgJiZiAlGeOPDlW5p3QqKWdQjplNSlBlWCj1EMCdz00jfcAXlI3xfkuwumepUt6eups76AWIxjKk7K3T1YztA80WqMxlkeGXNScPapQuSVpVCG1gE+XUAxlgNyrDAyOmkdskSTivhbY0LWrUovWFREZ1Z2Vh6AWIKKqg6sY+Hb2NU13zuO4B+W3SBft1zxwumPM+koxxtoDO2Pb0jb7ZVtHnZrbiNxeWyHyqzAtSqYUuAOpK50tqLkHfZztIlTGZhxviBaNbxdYrinZgN7vVyAfkEBb7xIHxzila9qGtctqYjTgDCqv6KjsNz/nNag9pzFMiBsL7mi/uUNOrcuyEYKYRVI7AhFGR06yY8ocjPe0kuLytV8pgDTTWxZlx6W1NnSuOgHUYIwMZr2hRV6ioxwGZVJHYEgZ+zM9O0qYVQqgAAAADoABgAQIzb8gcLTpbA/FnqMT97SsvEThdKlxBLa0pBQadIBQT6qru4AySeo0CSDmy/wCYLatUdS3ka2KNRp06iqmo6deVLqdOMk7ZzvI5yne1b/jNvVuG1sWJJ0qNqdJ2XAUAdVWBbXKvLVHh9EIig1CB5lXG7t1IB6hQei/45M79txi2q1DRp16b1FyWRXUsoBwcqDnYkA/OfPMNc07O4qKcFaNVgfYrTYg/hKO8OKmjitsF6Fqi/Z5L7fgIFn+KPBkuLB62keZQBqI2N9Ix5i7dioJx7qp7Tq+EPC1p2JuCPXXdiT30IxRFz7ZDt+/JVzMAbG5B6fR62f8A02mv8PVA4Xa46eX+JYk/jA0HiHz1W4fWS3tkRnNMVHaoGYAMzKqhVI39LEnPtJdy1xQ3dpRuCApdAWAOwYbMB8Mgyn/F1scUP/h6X9qp/nLL8NAf6Kt8+1Q/fWciBFuJUQnNNDSP6xRUb5+RVT/6xLUlXcabVzTa4P1aYU/A+XcN/BxJnznfVLexqV6Rw6Gmy74BxVTKn9UjIPwJgL3ggbiFveqBqRKlJ/ijAsh/dbUP/M+E1HiyccLqft0v7wSU8MvkuKKV6ZytRQy/IjofiOh+Ui3i1/qt/wDvKX9sQKKLz7tlDHecbLtPu3Q5yIGwu3FNMDGT+Am55RHEKxKWVvTbDDVVqlgtMkHT0YfgGmmNgznVLh8MeFvbWjagR5jlxkEHAVV3yNum3uIEh4BTvFp4vWpF8jHkqyqF0jY6id85m2iICIiAiIgIiICIiAiIgcVekroyMMhgVI+BGD/Geeub+UavDKoXLPQfPlvjJ2/McL0ce+ADn5geip0OKcLoXSBK9NXUHIBzsfcEbjuIHmCjUJJ2IHbPt8p3AARvLM595GpUaRurRCAmPMp5LAJvmoCTkEZGeowCZWVC2aoz6X6DbG6g5AAdvzc77n4QOIbHadinU7TrVGx6T2hHHUwOzUTv/P39pb3KviNb1Ka07x/KqqArOwxTfA+vrGyE9TqwPYynRUMtHh3hfRq29KqbiojvTpu40owDMoZguwOMnvmBZ1KqrqGVgykZDAggj3BHWV9xPhVO149Z1qYCrcecGUbAVFpMCwHbVrT7QT1MlnLPAUsLcW9NmcamYs2OrdcAbAfD5+8rXxN47q4hR8hgWtPVkHbzSyuVOOoApoD82HaBaXH7dqtpcU1GWejVQAdyyMAPxlK+GdhUfidFwraafmO50kBfyboAx7HUwGOvX2Mt3l/mi1vaYenUVWx66bMA6N3BB6jPQjYzt8Q47aWylq1emnwLDUfkg9RPwAgdDn69FHhtyxOC1M01/aqegf2s/ZNV4UcQWrw1KefVRd6bD4Fi6H5aXAz7g+0r7n7nD+kGWlSDLQpsWXVsaj4xrI7AAkAfrEnfYaPl3mG4sKvm27DcAOjDKuoPRgCNxk4IIIyexIIW9zlyEvEbhLjzzSYIKbDRr1KGZgR6hg+pvft7SScPtaNjaLS1aadGnguxHRRu7Hpk7k/OV1S8Vbh12skz7+a2P93QP4yOcw8y3t6NNZgtMHOhBpTbcFskliPiSNsgCB3eAcQN5x9LrBw9WoVB7ItF0T5HSq5HuTLG8RWA4ZX37U/71JTFewu7dBcNSrUlBwKmHTdumltiMg4z3zjvOCxsbi9qaKavUbBY5JY4HXc/OBP/AA05so0KT211VVFU66TOdvV9dB9vqA6nU3tPrxD5ysLmza3oVS7lqZACVFGFcE+plA7dpBbngFdAQyOpXZsqRjp1226j7xNVVs3HaBwa53OHepwJ1ntSo3ne5esa1e7p0KCrrZsrrzpAUaizEDIAA/nMCz+Ack1iyPcKqpszJqOojqFIA27Z39+8sqdLhlO4WmBc1EqP3ZKZQf7pZvv2+U70BERAREQEREBERAREQEREBERA+SMzptw2l5JoIiohXQFQBQBjAwFxjE70QPOXPXCmtbp6Y/N6HOdSt6lJOB6sYz8cyPUGyMGWV4lcqcTq3TV7ZPNpMQ2lSNYIQD1KcZHpwMZkCvOH1KDmncIUqLsVPUHGdj0OxzkQOIJttJ9aeKV3TRU8iiQqhQfWNlGOmo+0gXSYIMCX8W8R+I11KK6UVOx8pSHx3GtmJHzXB+MiGr4/GfGqbq05Vvqq03p27stTXoOkgEIqnUzNhVVtXpJPq0nHbIah6igZbGPjOkeILnZdpK+XeRbq/uGR1NKnTOHLgqwOSCFQjJOx+HxlycF5L4faBfKt1LKQwd/W+oAjUC31TuemIHnLzXJOcKM436j/ADlpcneGlCvbpdVrioWqDJWnpCrvjGWUnIx/+9ZKuYPDbh144qFWpNqLP5JVQ+SSdQIIySeoGZJeD8LpWlFKFBcIgwMnJO2NTHuTjrA0FHw84eqgFajHuxqMCevULgD7AOgm2teWbGnp0W1LKkFWKBnyOhLtlifiTNzECH+JlsanD2xkgOhIBIyCdIyB13IP2TQeEXDyPNuCCFKqiEjGR1bSfb0j+RJ3zJb+ZaVk76GI+a+ofiBNH4XPnhqD9F3X8c/4wJXXorURkcBlYFWB6EEYIMrDmPw5q69Vk2pT+YzAMp+BOAR+MtSIFKW/J92iu1amMrsFXS7sTjAVVPxBJ7D36SfcmctraaqjLiqyKCeyg7lQcDfIGevQb7yTPRViGKgkHKkgZBwRkHtszD94+85oGYiICIiAiIgIiICIiAiIgIiICIiAiIgJE+deUafEE1KQlZRgP0yoOdLHrtkkHtk+8lkQPOvN3LFfh7olTDhwdDoCQ2Oq7gYcbbd87ew56/IXFvKR1t86yBoV11qCMhnBIAHbrtL8rUEfTrVW0sGXIB0sMgMM9Dud/jOeB515Q5eqNxanaXdPBRi1RHx0VC2MjZgcL0OCCZ6GRAAABgAYAHYDtIjxazK8bs7ggBXpVaWr3dVZlT5lWYj9gyZQMTMRAxMxEBERA46mNJ1dMHOfbG8gnhddhadW0AyEc1FcH6y1GJwRjsdge49sSeMoIwRkHYidHhnCKFqpWggQMdTbk5PzYk4HYdBA2MREBERAREQEREBERAREQEREBERAREQEREBERAREQERECPc2Ix+isq6tN5QJ/VVtSFvh9bH2yQzEzAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
        className="img-fluid"
        style={{
          paddingTop: '100px',
          paddingLeft: '550px',
        }} />
      :

      <div>

        <div >
          <div className='container-fluid'>
            <div className='row gy-4 ' >
              {
                learn_data.map(
                  (data, index) => {
                    return (
                      // <li key={index}> {data.display_name}</li>

                      <div key={index} className='col-xl-3 col-lg-4 col-md-6'>
                        <div className='gallery-item h-100'>
                          <div  >

                            {
                              (data.content_data.content_type == "PDF")

                                ?

                                <a
                                  onClick={() => navigate('/pdf', { state: data.content_data.content_info })}
                                >

                                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/121px-PDF_file_icon.svg.png"
                                    alt={data.content_data.content_info.name} />

                                  {/* <p>{item_3.content_data.content_info.name}</p> */}
                                </a>

                                :

                                <>
                                <img src={data.content_data.content_info.thumbnail} className="img-fluid" alt="" />
                          {data.display_name}

                            {console.log('data', data.content_data.content_info.thumbnail)}
                                </>

}
                          </div>
                        </div>
                      </div>

                    )
                  }
                )
              }


            </div>
          </div>
        </div >

      </div>

  )
}
