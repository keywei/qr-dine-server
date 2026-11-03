export interface SeedOptionItem {
  name: string;
  extraPrice: number;
}

export interface SeedOptionGroup {
  title: string;
  type: string;
  isRequired: boolean;
  options: SeedOptionItem[];
}

export interface SeedMenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sortOrder: number;
  options: SeedOptionGroup[];
}

export interface SeedCategory {
  name: string;
  sortOrder: number;
  items: SeedMenuItem[];
}

export const seedCategories: SeedCategory[] = [
  {
    "name": "招牌主餐",
    "sortOrder": 1,
    "items": [
      {
        "name": "炙燒特選牛肉麵",
        "description": "慢火燉煮12小時濃郁高湯，炙燒熟成牛肋條，香氣撲鼻。",
        "price": 220,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 1,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "川味紅燒半筋半肉牛肉麵",
        "description": "精選澳洲牛腱與牛筋，以大紅袍花椒秘製紅燒高湯。",
        "price": 240,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 2,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "清燉頂級牛小排麵",
        "description": "蔬果慢火細燉清爽回甘，嚴選帶骨牛小排肉質軟嫩。",
        "price": 260,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 3,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "濃郁豚骨叉燒拉麵",
        "description": "道地九州白濁豚骨湯底，搭配自慢厚切炙燒五花叉燒。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 4,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "特選黑蒜油激辛拉麵",
        "description": "自製濃黑蒜香油與香濃豚骨湯底交織，層次深沉回味無窮。",
        "price": 220,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 5,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "地獄辛味噌拉麵",
        "description": "三種日本特選熟成味噌調和特調辣油，香濃辛辣過癮。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 6,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "柚子胡椒白湯拉麵",
        "description": "鹿兒島地雞白湯佐日本九州頂級柚子胡椒，清爽不油膩。",
        "price": 200,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 7,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "橫濱家系濃厚醬油拉麵",
        "description": "濃厚豚骨雞白湯與特製甘醇醬油，附大片海苔與菠菜。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 8,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "札幌奶油味噌拉麵",
        "description": "北海道經典風味，金黃甜玉米與一整塊特選香濃奶油。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 9,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "炙烤和牛牛舌麵",
        "description": "嚴選極上牛舌厚切薄烤，肉質爽脆彈牙，肉汁飽滿。",
        "price": 280,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 10,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "濃厚魚介豚骨沾麵",
        "description": "嚴選柴魚鯖魚乾熬煮超厚沾汁，搭配冰鎮特極粗麵。",
        "price": 230,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 11,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "麻辣花椒鴨血牛肉細粉",
        "description": "特選老滷果凍鴨血與嫩牛肉片，吸飽花椒麻辣鮮湯。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 12,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "鮮味鱸魚蛤蜊煨麵",
        "description": "每日產地直送七星鱸魚與特選文蛤，湯頭鮮美乳白。",
        "price": 220,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 13,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "藥膳滋補羊肉麵",
        "description": "十餘種溫潤漢方藥材燉煮小羔羊肉，冬日暖心無羶味。",
        "price": 230,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 14,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "香濃胡麻冷拌烏龍麵",
        "description": "手打讚岐烏龍冰鎮Q彈，淋上特製濃醇日式深焙胡麻醬。",
        "price": 160,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 15,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "明太子白醬烏龍麵",
        "description": "日本福岡博多明太子搭配濃郁法式鮮奶油白醬，極致順口。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 16,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "日式醬炒豚肉烏龍麵",
        "description": "大火快炒高麗菜與優質五花肉，特調和風炒麵醬鹹甜香濃。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 17,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "濃郁咖哩起司讚岐烏龍",
        "description": "熬煮日式蘋果洋蔥甜咖哩，撒上厚厚雙色牽絲起司。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 18,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "壽喜燒牛肉鍋燒烏龍",
        "description": "經典關東風味甘醇醬汁，豐富時蔬與雪花牛肉鍋燒入味。",
        "price": 200,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 19,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "極品海鮮烏龍麵",
        "description": "澎湃大白蝦、鮮甜透抽、鮮文蛤與特級帆立貝，海味滿溢。",
        "price": 250,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 20,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "港式XO醬海鮮炒公仔麵",
        "description": "主廚手作干貝蝦乾XO醬，微辣爆炒海鮮公仔麵，鑊氣十足。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 21,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "台式古早味香酥排骨麵",
        "description": "現炸金黃酥脆厚切帶骨豬排，搭配清甜白蘿蔔大骨湯麵。",
        "price": 170,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 22,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸大雞腿煨手工麵",
        "description": "整隻大雞腿秘醬醃炸，外皮酥脆肉質多汁，老母雞濃湯煨麵。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 23,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "番茄紅燒牛腩手工麵",
        "description": "大量新鮮熟成番茄文火煨燉軟爛牛腩，微酸開胃甘甜。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 24,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "泰式酸辣海鮮冬蔭麵",
        "description": "檸檬葉、南薑與香茅熬煮正宗冬蔭功酸辣海鮮湯底。",
        "price": 220,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 25,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "新加坡香濃叻沙海鮮麵",
        "description": "濃香椰奶佐特調南洋蝦膏叻沙湯底，搭配油豆腐與鮮蝦。",
        "price": 230,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 26,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "越式鮮牛肉河粉",
        "description": "滾燙清甜生薑牛骨高湯淋在粉嫩生牛肉片上，附九層塔檸檬角。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 27,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "韓式泡菜豆腐海鮮拉麵",
        "description": "熟成手作韓式酸辣泡菜、嫩豆腐與新鮮透抽海鮮鍋煮。",
        "price": 200,
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 28,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "黑松露野菇時蔬湯麵",
        "description": "義大利天然黑松露醬清炒鴻喜菇與野菇，溫潤時蔬素食友善。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 29,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      },
      {
        "name": "頂級海陸雙拼奢華麵",
        "description": "安格斯牛小排與阿根廷天使紅蝦，極致奢華的味覺饗宴。",
        "price": 290,
        "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 30,
        "options": [
          {
            "title": "麵體選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "經典拉麵 (彈牙)",
                "extraPrice": 0
              },
              {
                "name": "刀削寬麵 (帶勁)",
                "extraPrice": 0
              },
              {
                "name": "讚岐烏龍 (Q彈)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "湯頭辣度",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "原味濃湯 (不辣)",
                "extraPrice": 0
              },
              {
                "name": "主廚微辣",
                "extraPrice": 0
              },
              {
                "name": "地獄大辣 (+10)",
                "extraPrice": 10
              }
            ]
          },
          {
            "title": "超值加料",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加溏心蛋",
                "extraPrice": 25
              },
              {
                "name": "加厚切牛肉/叉燒",
                "extraPrice": 65
              },
              {
                "name": "加麵一份",
                "extraPrice": 20
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "經典丼飯",
    "sortOrder": 2,
    "items": [
      {
        "name": "日式厚切酥炸豬排丼",
        "description": "嚴選黃金溫體豚肉，外酥內嫩多汁，鋪上香滑蛋液。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 1,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "炭火直烤特選雪花牛丼",
        "description": "炭火大火炙燒優質雪花牛片，鹹甜燒肉醬香氣撲鼻。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 2,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "炙燒極上鮭魚親子丼",
        "description": "肥美挪威鮭魚炙燒香氣散發，鋪滿晶瑩剔透鹹香日本鮭魚卵。",
        "price": 280,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 3,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "照燒香烤無骨雞腿丼",
        "description": "去骨厚實溫體雞腿肉慢火香烤，刷上特調濃稠日式照燒醬。",
        "price": 170,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 4,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "正宗蒲燒特選鰻魚丼",
        "description": "嚴選外銷等級頂級白鰻魚，三道蒲燒工序碳烤，肉質細嫩。",
        "price": 320,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 5,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "黃金雙倍起司熔岩豬排丼",
        "description": "厚切多汁炸豬排鋪滿雙色莫札瑞拉起司，炙燒金黃牽絲拉起。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 6,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "濃郁日式咖哩酥炸雞排丼",
        "description": "經典甘口蔬果咖哩醬，搭配現炸金黃酥脆的大份量去骨雞排。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 7,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "鹽蔥溫泉蛋厚切牛舌丼",
        "description": "脆嫩牛舌切片炭烤，鋪滿特製手工胡麻鹽蔥醬，戳破溫泉蛋超滑順。",
        "price": 260,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 8,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "壽喜燒洋蔥五花豚肉丼",
        "description": "洋蔥絲與上等豬五花在壽喜燒醬汁中文火煨煮，入口甘甜多汁。",
        "price": 160,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 9,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "炙燒比目魚鰭邊星鰻雙拼丼",
        "description": "入口即化的極品比目魚鰭邊肉，佐以香烤星鰻與魚子醬點綴。",
        "price": 300,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 10,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "經典勝丼洋蔥滑蛋豬排",
        "description": "日本正宗勝丼做法，甜洋蔥柴魚高湯煮滾酥炸豬排，淋上滑嫩蛋液。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 11,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "櫻桃鴨胸蒜香丼",
        "description": "宜蘭櫻桃谷鴨胸舒肥後皮面香煎酥脆，切片淋上蒜香紅酒醬汁。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 12,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "川味辛香麻婆豆腐燴牛丼",
        "description": "道地郫縣豆瓣醬慢炒滑嫩嫩豆腐與牛絞肉，麻辣鮮香好下飯。",
        "price": 170,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 13,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "極上黑毛和牛燒肉丼",
        "description": "A5級黑毛和牛薄切快速炙燒，油脂如雪花化開，肉香四溢。",
        "price": 350,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 14,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "炙燒明太子嫩煎雞腿丼",
        "description": "多汁無骨香煎雞腿排，擠滿博多明太子特調醬火槍炙燒上色。",
        "price": 190,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 15,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "蒜香黑胡椒鐵板牛柳丼",
        "description": "鮮嫩牛柳搭配青椒洋蔥與現磨粗粒黑胡椒，鐵板大火熱炒噴香。",
        "price": 200,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 16,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "韓式泡菜炙烤五花肉丼",
        "description": "厚切五花肉高溫炭烤去油，配上酸爽韓式白菜泡菜解膩爽口。",
        "price": 170,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 17,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸廣島牡蠣雙拼丼",
        "description": "日本廣島產大顆牡蠣現裹生麵包屑酥炸，雙拼嫩煎雪花牛。",
        "price": 230,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 18,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "椒麻酥炸軟殼蟹丼",
        "description": "整隻帶殼軟殼蟹高溫油炸至香酥脆口，撒上主廚自磨椒麻椒鹽。",
        "price": 260,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 19,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "日式海鮮天婦羅大蝦天丼",
        "description": "特選草蝦兩尾、白身魚、地瓜南瓜片天婦羅，淋上特調天丼甜醬。",
        "price": 240,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 20,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "鹽烤挪威鯖魚佐檸檬丼",
        "description": "油脂豐富的北大西洋鯖魚，薄鹽炭烤皮脆肉嫩，擠上新鮮檸檬汁。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 21,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "泰式香辣打拋豬肉荷包蛋丼",
        "description": "新鮮九層塔與蒜碎爆炒特選黑豬絞肉，配後半熟黃金脆邊太陽蛋。",
        "price": 160,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 22,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "日式薑汁燒肉特上豚丼",
        "description": "老薑磨泥調製甘辛燒肉醬汁，炒香厚切豬梅花肉片，經典日式洋食。",
        "price": 170,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 23,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "和風七味唐辛骰子牛丼",
        "description": "頂級安格斯黑牛切成骰子厚塊大火煎烤，鎖住飽滿肉汁撒七味粉。",
        "price": 220,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 24,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "南蠻炸雞佐特調塔塔醬丼",
        "description": "外皮酥香雞肉吸附酸甜南蠻醋汁，佐上自製酸黃瓜水煮蛋塔塔醬。",
        "price": 180,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 25,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "松露野菇滑蛋牛肉丼",
        "description": "濃郁黑松露醬慢炒綜合菇蕈，滑順生食級歐姆蛋包裹多汁牛五花。",
        "price": 210,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 26,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "炙燒北海道干貝天使紅蝦丼",
        "description": "北海道生食級大干貝炙燒表面，配上甜嫩刺身天使紅蝦與鮭魚卵。",
        "price": 320,
        "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 27,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "照燒多汁杏鮑菇蔬食丼",
        "description": "手工刻花厚切杏鮑菇香煎至金黃出汁，刷上和風照燒醬甘甜多汁。",
        "price": 150,
        "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 28,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "鹽烤黃金松阪豬蒜片丼",
        "description": "珍稀松阪豬肉薄切鹽烤，口感爽脆不柴，佐酥炸金黃香脆蒜片。",
        "price": 230,
        "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 29,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      },
      {
        "name": "爆汁手打漢堡排太陽蛋丼",
        "description": "每日手打純牛肉與豚肉黃金比例漢堡排，厚實多汁淋上紅酒多蜜醬。",
        "price": 200,
        "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 30,
        "options": [
          {
            "title": "飯量選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常飯量",
                "extraPrice": 0
              },
              {
                "name": "少飯",
                "extraPrice": 0
              },
              {
                "name": "加飯 (+15)",
                "extraPrice": 15
              }
            ]
          },
          {
            "title": "醬汁調整",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常和風醬",
                "extraPrice": 0
              },
              {
                "name": "多醬濃郁",
                "extraPrice": 0
              },
              {
                "name": "醬汁分開裝",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "客製加購",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "日式溫泉蛋",
                "extraPrice": 20
              },
              {
                "name": "牽絲雙倍起司",
                "extraPrice": 30
              },
              {
                "name": "精燉味噌湯一份",
                "extraPrice": 25
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "人氣炸物小點",
    "sortOrder": 3,
    "items": [
      {
        "name": "黃金酥脆唐揚炸雞",
        "description": "特調日式秘醬醃製，現點現炸外皮金黃酥脆。",
        "price": 120,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 1,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "日式酥炸南瓜可樂餅",
        "description": "嚴選北海道甜南瓜泥裹麵包粉現炸，外脆內綿甜香順口。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 2,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "爆漿起司牛肉可樂餅",
        "description": "馬鈴薯泥混合黑胡椒牛肉碎與雙重切達起司，切開爆漿拉絲。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 3,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸廣島生蠔牡蠣",
        "description": "產地直送廣島肥美生蠔裹薄粉輕炸，滿滿海味爆漿在口中。",
        "price": 150,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 4,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "日式黃金炸蝦天婦羅",
        "description": "日式麵衣輕盈酥脆，特選鮮甜彈牙大白蝦三本入。",
        "price": 140,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 5,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "椒鹽香酥雞軟骨",
        "description": "特製辛香粉醃製雞膝軟骨，高溫快炸酥脆喀滋越嚼越香。",
        "price": 90,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 6,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸澎湖花枝丸佐芥末",
        "description": "澎湖手工扎實花枝丸，吃得到大塊新鮮花枝肉塊顆粒。",
        "price": 80,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 7,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "特選黃金脆薯",
        "description": "比利時進口馬鈴薯條，外酥內鬆軟，可選松露白醬或蜂蜜芥末。",
        "price": 70,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 8,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "炙燒明太子日本山藥",
        "description": "厚切日本進口長芋山藥，擠上滿滿博多明太子美乃滋火烤上色。",
        "price": 110,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 9,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "名古屋特製秘醬炸手羽先",
        "description": "名古屋名物炸三節翅，刷上鹹甜黑胡椒秘醬，下酒必備。",
        "price": 120,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 10,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "和風酥炸揚出豆腐",
        "description": "特選嫩豆腐切塊裹柴魚片酥炸，浸入特調清甜柴魚醬汁。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 11,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "香脆酥炸洋蔥圈",
        "description": "新鮮洋蔥原圈厚切裹粉現炸，天然洋蔥甜味多汁不辛辣。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 12,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "和風野菜天婦羅拼盤",
        "description": "香菇、栗子地瓜、青椒、紫蘇葉與茄子日式輕脆天婦羅拼盤。",
        "price": 110,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 13,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸特選香菇杏鮑菇",
        "description": "綜合多汁香菇與彈牙杏鮑菇雙拼酥炸，鎖住菌菇天然鮮甜水分。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 14,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "韓式甜辣醬無骨炸雞",
        "description": "無骨多汁腿肉炸雞裹上特調韓式道地甜辣紅醬，撒上烤白芝麻。",
        "price": 130,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 15,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "香酥滿腹魚卵柳葉魚",
        "description": "嚴選腹中滿滿魚卵的挪威柳葉魚，整尾酥炸香脆可直接食用。",
        "price": 85,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 16,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "雙色地瓜QQ球",
        "description": "黃地瓜與紫地瓜揉製空心外皮，現炸酥脆Q彈一口一顆停不下來。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 17,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸鮮嫩英式鱈魚塊",
        "description": "精選無刺深海鱈魚條裹英式啤酒麵糊炸至金黃，附手工塔塔醬。",
        "price": 100,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 18,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "九層塔香酥炸元寶水餃",
        "description": "手工包製黑豬肉水餃高溫炸至外皮如脆餅，充滿濃郁九層塔香。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 19,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "川味椒麻酥脆小酥肉",
        "description": "特選豬里肌肉條拌花椒蛋糊油炸，香麻酥脆一口接一口。",
        "price": 110,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 20,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "日式芝士竹輪炸卷",
        "description": "日式烤竹輪中間塞入切達起司條裹粉酥炸，濃郁起司風味。",
        "price": 85,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 21,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸牽絲義式起司條",
        "description": "義大利莫札瑞拉起司裹特調義式香料麵包粉，拉絲可達30公分。",
        "price": 90,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 22,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "紫蘇海苔炸鮮蝦春捲",
        "description": "清香紫蘇葉與手剝鮮蝦仁包入春捲皮現炸，香氣獨特解膩。",
        "price": 100,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 23,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "炙燒明太子秋刀魚",
        "description": "秋刀魚細心去刺去骨，填入飽滿明太子後慢烤炙燒，肉香濃郁。",
        "price": 95,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 24,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥脆爆漿炸鮮奶球",
        "description": "特濃小農鮮乳熬煮成凍裹粉快炸，外皮酥脆內餡溫熱奶香爆漿。",
        "price": 70,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 25,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "日式胡麻淋醬炸茄子",
        "description": "日本圓茄斜切花刀大火快炸保留鮮豔紫皮，淋上焙煎胡麻醬。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 26,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸手工牛蒡絲片",
        "description": "新鮮牛蒡刨成薄片慢火低溫油炸，如同洋芋片般酥脆甘甜。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 27,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "香煎脆皮日式煎餃",
        "description": "手工薄皮煎餃底部煎出如蕾絲般的黃金脆羽翅，咬下爆出肉汁。",
        "price": 80,
        "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 28,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "香酥雞皮仙貝仙貝酥",
        "description": "新鮮雞皮洗淨刮油後炸至極致香脆，薄如仙貝完全不帶油耗味。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 29,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      },
      {
        "name": "酥炸鮑魚菇佐七味鹽",
        "description": "巨大肉質厚實鮑魚菇裹薄粉酥炸，撒上日本七味唐辛子胡椒。",
        "price": 70,
        "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 30,
        "options": [
          {
            "title": "沾醬搭配",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "手工塔塔醬",
                "extraPrice": 0
              },
              {
                "name": "泰式甜辣醬",
                "extraPrice": 0
              },
              {
                "name": "蜂蜜芥末醬",
                "extraPrice": 0
              },
              {
                "name": "特選胡椒鹽",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "辣度調味",
            "type": "SINGLE",
            "isRequired": false,
            "options": [
              {
                "name": "原味不辣",
                "extraPrice": 0
              },
              {
                "name": "微辣辣椒粉",
                "extraPrice": 0
              },
              {
                "name": "特辛大辣",
                "extraPrice": 0
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "手搖飲品",
    "sortOrder": 4,
    "items": [
      {
        "name": "黑糖珍珠鮮奶茶",
        "description": "每日現熬手炒黑糖珍珠，搭配小農純鮮奶。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 1,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "炭焙鐵觀音重乳拿鐵",
        "description": "重烘焙鐵觀音茶香濃郁深厚，搭配高比例純鮮乳。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 2,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "靜岡極濃抹茶鮮奶",
        "description": "日本靜岡百年茶廠直送一番茶抹粉，茶香微苦回甘與鮮奶完美融合。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 3,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "阿里山高山金萱青茶",
        "description": "阿里山高海拔金萱茶葉低溫萃取，自帶天然奶香與高山冷冽甘甜。",
        "price": 45,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 4,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "四季春茉香茶凍青",
        "description": "南投名間鄉四季春青茶，加入手工熬製茉莉綠茶Ｑ嫩茶凍。",
        "price": 50,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 5,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "熟成錫蘭紅茶拿鐵",
        "description": "斯里蘭卡頂級錫蘭熟成茶葉，茶感濃厚不乾澀，奶香醇厚。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 6,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "鮮榨翡翠檸檬綠茶",
        "description": "屏東九如綠皮檸檬現點現榨，黃金酸甜比例搭配茉莉綠茶。",
        "price": 55,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 7,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "鮮榨紅心芭樂檸檬玉露",
        "description": "產地直採紅心芭樂鮮榨果泥，佐以檸檬汁與清香綠茶，粉嫩消暑。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 8,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "楊枝甘露芒果西米露",
        "description": "新鮮愛文芒果打製濃郁果昔，搭配紅葡萄柚果肉、西米露與椰奶。",
        "price": 85,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 9,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "白桃烏龍冷泡茶",
        "description": "高山烏龍原片茶葉低溫冷泡8小時，散發清雅白桃果香回甘解膩。",
        "price": 50,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 10,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "鮮榨葡萄柚果粒多多綠",
        "description": "新鮮葡萄柚現挖爆汁果粒，搭配兩瓶正統養樂多與茉莉綠茶。",
        "price": 70,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 11,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "百香雙Q熱帶果茶",
        "description": "南投埔里百香果原汁，內含黑糖波霸珍珠與清脆椰果雙重咀嚼口感。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 12,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "皇家伯爵茶拿鐵佐香草冰淇淋",
        "description": "佛手柑香氣皇家伯爵鮮奶茶，頂端放入一整球特級香草冰淇淋。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 13,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "日本宇治深煎焙茶拿鐵",
        "description": "京都宇治焙煎綠茶低咖啡因，溫和炒焙香氣與香濃鮮奶極致撫慰。",
        "price": 70,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 14,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "正宗泰式手標厚乳茶",
        "description": "泰國手標紅茶現煮現拉，搭配煉乳與特製淡奶，濃醇香甜異國風。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 15,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "古早味冬瓜檸檬奇亞籽",
        "description": "台南老牌冬瓜磚手工慢火熬煮，配鮮檸檬與富含膳食纖維奇亞籽。",
        "price": 50,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 16,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "手熬金鑽鳳梨冰茶",
        "description": "台南關廟金鑽鳳梨切丁文火蜜熬，酸甜果肉纖維融入高山青茶。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 17,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "鮮金桔百香蜂蜜飲",
        "description": "屏東新鮮鮮桔壓汁，加上天然純百花蜂蜜與百香果汁，潤喉舒暢。",
        "price": 55,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 18,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "鮮綠奇異果綠茶多多",
        "description": "整顆新鮮紐西蘭綠奇異果現打果肉，維生素C滿載的多多綠茶。",
        "price": 70,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 19,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "古早味仙草凍鮮奶",
        "description": "關西百年仙草手工慢熬凝結成嫩滑仙草凍，倒入純鮮乳不加一滴水。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 20,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "濃郁大甲芋頭波霸鮮奶",
        "description": "台中大甲檳榔心芋頭蒸透手搗綿密芋泥，配上彈牙黑糖珍珠鮮乳。",
        "price": 75,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 21,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "芝芝草莓厚乳奶蓋",
        "description": "冬季大湖草莓現打冰沙，淋上海鹽芝士濃醇鹹甜厚奶蓋。",
        "price": 85,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 22,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "芝芝芒果起司奶蓋",
        "description": "滿滿枋山愛文芒果打製沁涼冰沙，覆蓋特製濃厚紐西蘭起司奶霜。",
        "price": 85,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 23,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "桂花金萱蜜茶",
        "description": "苗栗天然乾桂花苞窨製金萱烏龍，龍眼蜜調和芳香甘醇無澀感。",
        "price": 50,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 24,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "紅石榴蔓越莓氣泡飲",
        "description": "天然紅石榴汁與蔓越莓果露，打入細緻氣泡水，微酸微甜夢幻漸層。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 25,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "藍柑橘海洋檸檬氣泡飲",
        "description": "藍色夏威夷柑橘果漿佐新鮮黃檸檬切片，視覺與味覺的海洋度假風。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 26,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "韓式香柚蜜氣泡飲",
        "description": "韓國特選黃金柚子茶醬，充填細緻綿密碳酸氣泡，清爽解膩。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 27,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "決明子古早味麥茶",
        "description": "炒香決明子與大麥純火煎煮，無咖啡因低負擔，老人小孩皆宜。",
        "price": 40,
        "imageUrl": "https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 28,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "鮮榨香橙茉莉綠茶",
        "description": "整顆加州甜橙現切現榨原汁，搭配茉莉花香翡翠綠茶，清甜芬芳。",
        "price": 65,
        "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 29,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      },
      {
        "name": "黑糖老薑紅棗桂圓茶",
        "description": "竹山老薑現熬溫潤辛辣，台南白河柴燒桂圓與紅棗黑糖溫熱暖身。",
        "price": 60,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        "sortOrder": 30,
        "options": [
          {
            "title": "甜度選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常糖 (10分)",
                "extraPrice": 0
              },
              {
                "name": "半糖 (5分)",
                "extraPrice": 0
              },
              {
                "name": "微糖 (3分)",
                "extraPrice": 0
              },
              {
                "name": "無糖 (0分)",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "冰塊選擇",
            "type": "SINGLE",
            "isRequired": true,
            "options": [
              {
                "name": "正常冰",
                "extraPrice": 0
              },
              {
                "name": "少冰",
                "extraPrice": 0
              },
              {
                "name": "微冰",
                "extraPrice": 0
              },
              {
                "name": "去冰",
                "extraPrice": 0
              },
              {
                "name": "溫熱",
                "extraPrice": 0
              }
            ]
          },
          {
            "title": "加料專區",
            "type": "MULTIPLE",
            "isRequired": false,
            "options": [
              {
                "name": "加手炒黑糖珍珠",
                "extraPrice": 10
              },
              {
                "name": "加脆口椰果",
                "extraPrice": 10
              },
              {
                "name": "加茉香茶凍",
                "extraPrice": 10
              },
              {
                "name": "加嫩布丁一整顆",
                "extraPrice": 15
              }
            ]
          }
        ]
      }
    ]
  }
];
