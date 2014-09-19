/*global module: true*/
/*jshint white: false*/
module.exports = {
   "__unlinked_node" : [
      {
         "data" : {
            "frequency" : [ 0.8360000252723694, 1.415000081062317, 0.8360000252723694 ],
            "offset" : [ 0, 0, 0 ],
            "terms" : [
               {
                  "fun" : {
                     "cellCount" : 5,
                     "cellScale" : 20,
                     "components" : [
                        {
                           "k" : 2,
                           "multiplier" : 1.099000096321106,
                           "power" : 2.470000028610229
                        },
                        {
                           "k" : 2,
                           "multiplier" : -0.2180000096559525,
                           "power" : 1.10699999332428
                        }
                     ],
                     "frequency" : [ 1.392000079154968, 1.160000085830688, 1.392000079154968 ],
                     "offset" : [ 373.2666015625, 146.533203125, -277.4169921875 ],
                     "type" : "worley"
                  },
                  "power" : 0
               },
               {
                  "fun" : {
                     "frequency" : [ 0.5420000553131104, 0.3660000264644623, 0.5420000553131104 ],
                     "offset" : [ 301.7822265625, 257.32421875, 65.625 ],
                     "type" : "simplex"
                  },
                  "power" : 0
               },
               {
                  "fun" : {
                     "frequency" : [ 0.9030000567436218, 0.2960000038146973, 0.9030000567436218 ],
                     "offset" : [ -246.923828125, -257.6904296875, 253.7353515625 ],
                     "type" : "perlin"
                  },
                  "power" : 0
               }
            ],
            "type" : "product"
         },
         "nodeType" : 4
      },
      {
         "data" : {
            "cellCount" : 4,
            "cellScale" : 1,
            "components" : [],
            "frequency" : [ 1, 1 ],
            "offset" : [ 258.251953125, 197.265625 ],
            "type" : "worley"
         },
         "nodeType" : 3
      },
      {
         "data" : {
            "clamp" : true,
            "clampPower" : 6.789999961853027,
            "frequency" : [ 1.959000110626221, 1.670000076293945, 1.959000110626221 ],
            "fun" : null,
            "max" : 1.579999923706055,
            "min" : -0.3400000035762787,
            "offset" : [ 0, 0, 0 ],
            "type" : "remap"
         },
         "nodeType" : 4
      },
      {
         "data" : {
            "cellCount" : 3,
            "cellScale" : 2.169999837875366,
            "components" : [
               {
                  "k" : 1,
                  "multiplier" : 2,
                  "power" : 2.300000190734863
               }
            ],
            "frequency" : [ 0.6800000071525574, 0.2080000042915344, 0.6800000071525574 ],
            "offset" : [ 246.97265625, 67.9931640625, -16.11328125 ],
            "type" : "worley"
         },
         "nodeType" : 4
      },
      {
         "data" : {
            "cave_ceiling" : [
               {
                  "clearance" : 0,
                  "constraintType" : "CRYSTAL",
                  "density" : 0.2360000163316727,
                  "depth" : 4.5,
                  "instance" : {
                     "type" : "crystal_ceiling"
                  },
                  "maxGradient" : 2.299999952316284,
                  "maxSize" : 1.689999938011169,
                  "maxY" : 256,
                  "minGradient" : 0,
                  "minSize" : 0.25,
                  "minY" : 0,
                  "noise" : {
                     "frequency" : [ 0.9290000200271606, 1.152000069618225, 0.9290000200271606 ],
                     "fun" : {
                        "cellCount" : 5,
                        "cellScale" : 5.059999942779541,
                        "components" : [
                           {
                              "k" : 0,
                              "multiplier" : -1.886000037193298,
                              "power" : 0.6860000491142273
                           },
                           {
                              "k" : 0,
                              "multiplier" : 2,
                              "power" : 4
                           }
                        ],
                        "frequency" : [ 1.25, 0.9640000462532043, 1.25 ],
                        "offset" : [ -398.9990234375, 50.8544921875, -245.361328125 ],
                        "type" : "worley"
                     },
                     "offset" : [ 0, 0, 0 ],
                     "scale" : 4.119999885559082,
                     "type" : "interpolated"
                  },
                  "sizeNoise" : null,
                  "threshold" : 0.3830000162124634
               }
            ],
            "cave_floor" : [],
            "surface_ceiling" : [],
            "surface_floor" : [],
            "type" : "standard"
         },
         "nodeType" : 9
      },
      {
         "data" : {
            "cellCount" : 4,
            "cellScale" : 1,
            "components" : [],
            "frequency" : [ 1, 1 ],
            "offset" : [ -260.7177734375, 287.1337890625 ],
            "type" : "worley"
         },
         "nodeType" : 3
      },
      {
         "data" : {
            "frequency" : [ 1, 1 ],
            "fun" : null,
            "offset" : [ 0, 0 ],
            "scale" : 0.1000000014901161,
            "type" : "interpolated"
         },
         "nodeType" : 3
      },
      {
         "data" : {
            "flattening" : {
               "distort" : null,
               "distortionScale" : 1,
               "fun" : null,
               "maxPower" : 1.75,
               "minPower" : 0.125,
               "overflowPower" : 0.25,
               "voronoiScale" : 0.2000000029802322
            },
            "height" : {
               "fun" : null,
               "maxLevel" : 256,
               "minLevel" : 0
            },
            "type" : "standard"
         },
         "nodeType" : 5
      }
   ],
   "generator" : {
      "biomeDistortion" : {
         "frequency" : [ 0.8380000591278076, 0.8380000591278076 ],
         "offset" : [ -326.8798828125, -108.447265625 ],
         "type" : "simplex"
      },
      "biomeDistortionScale" : 16,
      "biomeSize" : 16,
      "biomes" : [
         {
            "caveThresholdBias" : 0.2999999821186066,
            "decoration" : null,
            "distortion" : 61.5,
            "distribution" : {
               "bias" : 4.019999980926514,
               "exponent" : 4.650000095367432,
               "maxAltitude" : 0.699999988079071,
               "maxHumidity" : 0.8799999952316284,
               "maxTemperature" : 0.4899999797344208,
               "maxVegetation" : 1,
               "minAltitude" : 0,
               "minHumidity" : 0,
               "minTemperature" : 0,
               "minVegetation" : 0,
               "weight" : 1.799999952316284
            },
            "heightmap" : {
               "flattening" : {
                  "distort" : {
                     "frequency" : [ 1.409000039100647, 1.409000039100647 ],
                     "offset" : [ 0, 0 ],
                     "terms" : [
                        {
                           "fun" : {
                              "frequency" : [ 1.184000015258789, 1.184000015258789 ],
                              "fun" : {
                                 "frequency" : [ 0.5600000023841858, 0.5600000023841858 ],
                                 "offset" : [ 223.7060546875, 274.90234375 ],
                                 "type" : "simplex"
                              },
                              "octaves" : [
                                 {
                                    "multiplier" : 0.2620000243186951,
                                    "offset" : [ 397.412109375, 399.7314453125 ],
                                    "scale" : -2.889999866485596
                                 }
                              ],
                              "offset" : [ 0, 0 ],
                              "type" : "fractal"
                           },
                           "multiplier" : 0.2800000011920929,
                           "power" : 1.46999990940094
                        }
                     ],
                     "type" : "sum"
                  },
                  "distortionScale" : -2.029999971389771,
                  "fun" : {
                     "cellCount" : 4,
                     "cellScale" : 3.849999904632568,
                     "components" : [
                        {
                           "k" : 1,
                           "multiplier" : -0.2680000066757202,
                           "power" : 1.209000110626221
                        }
                     ],
                     "frequency" : [ 1, 1 ],
                     "offset" : [ -30.3466796875, -211.7431640625 ],
                     "type" : "worley"
                  },
                  "maxPower" : 3.869999885559082,
                  "minPower" : 1.799999952316284,
                  "overflowPower" : 3.009999990463257,
                  "voronoiScale" : 0.5399999618530273
               },
               "height" : {
                  "fun" : {
                     "frequency" : [ 0.5700000524520874, 0.5700000524520874 ],
                     "fun" : {
                        "cellCount" : 4,
                        "cellScale" : 1,
                        "components" : [
                           {
                              "k" : 1,
                              "multiplier" : -0.2700000107288361,
                              "power" : 3.255000114440918
                           }
                        ],
                        "frequency" : [ 1, 1 ],
                        "offset" : [ 226.6357421875, 242.0654296875 ],
                        "type" : "worley"
                     },
                     "octaves" : [
                        {
                           "multiplier" : -0.5690000057220459,
                           "offset" : [ 364.697265625, 340.5517578125 ],
                           "scale" : 0.9300000071525574
                        },
                        {
                           "multiplier" : 0.5950000286102295,
                           "offset" : [ 31.4697265625, -286.1328125 ],
                           "scale" : 2.009999990463257
                        }
                     ],
                     "offset" : [ 0, 0 ],
                     "type" : "fractal"
                  },
                  "maxLevel" : 158,
                  "minLevel" : 21
               },
               "type" : "standard"
            },
            "lakes" : {
               "caves" : [
                  {
                     "liquidType" : "WATER",
                     "maxDepth" : 8,
                     "maxWidth" : 44,
                     "maxY" : 0,
                     "minY" : 0,
                     "noise" : {
                        "frequency" : [ 1.600000023841858, 0.8700000643730164, 1.600000023841858 ],
                        "fun" : {
                           "cellCount" : 8,
                           "cellScale" : 2.879999876022339,
                           "components" : [
                              {
                                 "k" : 2,
                                 "multiplier" : 0.4770000278949738,
                                 "power" : 1.757000088691711
                              }
                           ],
                           "frequency" : [ 0.6020000576972961, 1.232000112533569, 0.6020000576972961 ],
                           "offset" : [ -355.029296875, -392.96875, 335.009765625 ],
                           "type" : "worley"
                        },
                        "octaves" : [
                           {
                              "multiplier" : 0.2780000269412994,
                              "offset" : [ -179.296875, -181.689453125, 70.3125 ],
                              "scale" : -1.589999914169312
                           }
                        ],
                        "offset" : [ 0, 0, 0 ],
                        "type" : "fractal"
                     },
                     "threshold" : 1
                  }
               ],
               "surface" : [
                  {
                     "liquidType" : "LAVA",
                     "maxDepth" : 7,
                     "maxWidth" : 44,
                     "maxY" : 83,
                     "minY" : 31,
                     "noise" : {
                        "cellCount" : 8,
                        "cellScale" : 2.159999847412109,
                        "components" : [
                           {
                              "k" : 1,
                              "multiplier" : 1.300000071525574,
                              "power" : 2.113000154495239
                           },
                           {
                              "k" : 1,
                              "multiplier" : -1.612000107765198,
                              "power" : 3.201000213623047
                           }
                        ],
                        "frequency" : [ 1.174000024795532, 1.156000018119812, 1.174000024795532 ],
                        "offset" : [ 89.1845703125, -86.0595703125, -187.0361328125 ],
                        "type" : "worley"
                     },
                     "threshold" : 1
                  },
                  {
                     "liquidType" : "WATER",
                     "maxDepth" : 8,
                     "maxWidth" : 44,
                     "maxY" : 0,
                     "minY" : 0,
                     "noise" : {
                        "frequency" : [ 0.9600000381469727, 0.5540000200271606, 0.9600000381469727 ],
                        "offset" : [ -162.1826171875, 272.0947265625, -381.005859375 ],
                        "type" : "simplex"
                     },
                     "threshold" : 1
                  }
               ],
               "type" : "standard"
            },
            "name" : "Frozen",
            "ores" : null,
            "plantations" : null,
            "strata" : {
               "strata" : [
                  {
                     "averageDepth" : 3,
                     "averageY" : 64,
                     "blockType" : "GRANITE",
                     "depthNoise" : {
                        "frequency" : [ 1, 1 ],
                        "offset" : [ 0, 0 ],
                        "terms" : [
                           {
                              "fun" : {
                                 "frequency" : [ 1.366000056266785, 1.366000056266785 ],
                                 "fun" : {
                                    "frequency" : [ 1.40500009059906, 1.40500009059906 ],
                                    "offset" : [ -398.9990234375, 50.8544921875 ],
                                    "type" : "simplex"
                                 },
                                 "offset" : [ 0, 0 ],
                                 "scale" : 3.990000009536743,
                                 "type" : "interpolated"
                              },
                              "power" : 2.220000028610229
                           },
                           {
                              "fun" : {
                                 "cellCount" : 4,
                                 "cellScale" : 0.6800000071525574,
                                 "components" : [
                                    {
                                       "k" : 1,
                                       "multiplier" : -0.5320000052452087,
                                       "power" : 2
                                    }
                                 ],
                                 "frequency" : [ 1.226000070571899, 1.226000070571899 ],
                                 "offset" : [ -245.361328125, 246.97265625 ],
                                 "type" : "worley"
                              },
                              "power" : 1.379999995231628
                           }
                        ],
                        "type" : "product"
                     },
                     "depthNoiseScale" : 5,
                     "replaceType" : [],
                     "replaceTypes" : [ "STONE" ],
                     "yNoise" : {
                        "frequency" : [ 1.321000099182129, 1.321000099182129 ],
                        "offset" : [ -119.775390625, 316.748046875 ],
                        "type" : "simplex"
                     },
                     "yNoiseScale" : 1
                  }
               ],
               "type" : "standard"
            },
            "substrate" : {
               "caves" : [
                  {
                     "averageDepth" : 4,
                     "blockType" : "ICE",
                     "depthNoise" : {
                        "frequency" : [ 0.001000000047497451, 0.001000000047497451 ],
                        "offset" : [ 67.9931640625, -16.11328125 ],
                        "type" : "simplex"
                     },
                     "depthNoiseScale" : 10,
                     "maxGradient" : 3,
                     "maxY" : 127
                  },
                  {
                     "averageDepth" : 7,
                     "blockType" : "CRYSTAL",
                     "depthNoise" : {
                        "frequency" : [ 1.40500009059906, 1.40500009059906 ],
                        "fun" : {
                           "frequency" : [ 1, 1 ],
                           "offset" : [ -119.775390625, 316.748046875 ],
                           "type" : "simplex"
                        },
                        "offset" : [ 0, 0 ],
                        "type" : "absolute"
                     },
                     "depthNoiseScale" : 3,
                     "maxGradient" : 3,
                     "maxY" : 196
                  }
               ],
               "surface" : [
                  {
                     "averageDepth" : 7,
                     "blockType" : "CRYSTAL",
                     "depthNoise" : {
                        "clamp" : true,
                        "clampPower" : 5.029999732971191,
                        "frequency" : [ 1.202000021934509, 1.202000021934509 ],
                        "fun" : {
                           "frequency" : [ 0.8260000348091125, 0.8260000348091125 ],
                           "fun" : {
                              "cellCount" : 4,
                              "cellScale" : 3.129999876022339,
                              "components" : [
                                 {
                                    "k" : 1,
                                    "multiplier" : 1.055999994277954,
                                    "power" : 2.705000162124634
                                 }
                              ],
                              "frequency" : [ 1, 1 ],
                              "offset" : [ -398.9990234375, 50.8544921875 ],
                              "type" : "worley"
                           },
                           "offset" : [ 0, 0 ],
                           "scale" : 4.690000057220459,
                           "type" : "interpolated"
                        },
                        "max" : 0.3299999833106995,
                        "min" : -0.03999999910593033,
                        "offset" : [ 0, 0 ],
                        "type" : "remap"
                     },
                     "depthNoiseScale" : 3,
                     "maxGradient" : 3,
                     "maxY" : 256
                  },
                  {
                     "averageDepth" : 7,
                     "blockType" : "STONE",
                     "depthNoise" : null,
                     "depthNoiseScale" : 3,
                     "maxGradient" : 3,
                     "maxY" : 256
                  },
                  {
                     "averageDepth" : 3,
                     "blockType" : "ICE",
                     "depthNoise" : {
                        "clamp" : true,
                        "clampPower" : 7.37999963760376,
                        "frequency" : [ 1.531000018119812, 1.531000018119812 ],
                        "fun" : {
                           "frequency" : [ 1.447000026702881, 1.447000026702881 ],
                           "fun" : {
                              "frequency" : [ 1.465000033378601, 1.465000033378601 ],
                              "fun" : {
                                 "frequency" : [ 1.234000086784363, 1.234000086784363 ],
                                 "offset" : [ 359.3017578125, 195.5322265625 ],
                                 "type" : "simplex"
                              },
                              "octaves" : [
                                 {
                                    "multiplier" : 0.9660000205039978,
                                    "offset" : [ -235.7177734375, 194.970703125 ],
                                    "scale" : -0.5600000023841858
                                 },
                                 {
                                    "multiplier" : 0.6000000238418579,
                                    "offset" : [ -313.37890625, 79.2236328125 ],
                                    "scale" : 1
                                 },
                                 {
                                    "multiplier" : -0.6570000052452087,
                                    "offset" : [ -91.8212890625, 187.98828125 ],
                                    "scale" : -3.879999876022339
                                 },
                                 {
                                    "multiplier" : 1,
                                    "offset" : [ 87.158203125, 57.91015625 ],
                                    "scale" : 1
                                 },
                                 {
                                    "multiplier" : 1,
                                    "offset" : [ -110.9375, -278.759765625 ],
                                    "scale" : 1
                                 },
                                 {
                                    "multiplier" : 1,
                                    "offset" : [ -219.921875, -59.8876953125 ],
                                    "scale" : -2.079999923706055
                                 }
                              ],
                              "offset" : [ 0, 0 ],
                              "type" : "fractal"
                           },
                           "offset" : [ 0, 0 ],
                           "scale" : 5.579999923706055,
                           "type" : "interpolated"
                        },
                        "max" : 0.5999999642372131,
                        "min" : 0.02999999932944775,
                        "offset" : [ 0, 0 ],
                        "type" : "remap"
                     },
                     "depthNoiseScale" : 3,
                     "maxGradient" : 3,
                     "maxY" : 256
                  }
               ],
               "type" : "standard"
            }
         },
         {
            "caveThresholdBias" : 0,
            "decoration" : null,
            "distortion" : 16.5,
            "distribution" : {
               "bias" : 2.149999856948853,
               "exponent" : 1.579999923706055,
               "maxAltitude" : 1,
               "maxHumidity" : 1,
               "maxTemperature" : 0.6499999761581421,
               "maxVegetation" : 1,
               "minAltitude" : 0.6699999570846558,
               "minHumidity" : 0,
               "minTemperature" : 0,
               "minVegetation" : 0,
               "weight" : 2.809999942779541
            },
            "heightmap" : {
               "flattening" : {
                  "distort" : null,
                  "distortionScale" : 1,
                  "fun" : null,
                  "maxPower" : 1.75,
                  "minPower" : 0.125,
                  "overflowPower" : 0.25,
                  "voronoiScale" : 0.2000000029802322
               },
               "height" : {
                  "fun" : {
                     "clamp" : true,
                     "clampPower" : 6.109999656677246,
                     "frequency" : [ 0.3730000257492065, 0.3730000257492065 ],
                     "fun" : {
                        "frequency" : [ 1, 1 ],
                        "fun" : {
                           "frequency" : [ 1.194000005722046, 1.194000005722046 ],
                           "offset" : [ 0, 0 ],
                           "terms" : [
                              {
                                 "fun" : {
                                    "frequency" : [ 1, 1 ],
                                    "offset" : [ -398.9990234375, 50.8544921875 ],
                                    "type" : "perlin"
                                 },
                                 "multiplier" : 0.4199999868869781,
                                 "power" : 2.460000038146973
                              },
                              {
                                 "fun" : {
                                    "cellCount" : 4,
                                    "cellScale" : 1,
                                    "components" : [
                                       {
                                          "k" : 0,
                                          "multiplier" : 1,
                                          "power" : 2
                                       }
                                    ],
                                    "frequency" : [ 1, 1 ],
                                    "offset" : [ -245.361328125, 246.97265625 ],
                                    "type" : "worley"
                                 },
                                 "multiplier" : -1.049999952316284,
                                 "power" : 1.759999990463257
                              }
                           ],
                           "type" : "sum"
                        },
                        "offset" : [ 0, 0 ],
                        "scale" : 4.079999923706055,
                        "type" : "interpolated"
                     },
                     "max" : 0.3100000023841858,
                     "min" : -0.1599999964237213,
                     "offset" : [ 0, 0 ],
                     "type" : "remap"
                  },
                  "maxLevel" : 108,
                  "minLevel" : 0
               },
               "type" : "standard"
            },
            "lakes" : null,
            "name" : "Flat",
            "ores" : null,
            "plantations" : null,
            "strata" : {
               "strata" : [
                  {
                     "averageDepth" : 5,
                     "averageY" : 64,
                     "blockType" : "ICE",
                     "depthNoise" : {
                        "frequency" : [ 1, 1 ],
                        "offset" : [ -282.1533203125, -267.28515625 ],
                        "type" : "simplex"
                     },
                     "depthNoiseScale" : 1,
                     "replaceType" : [],
                     "yNoise" : null,
                     "yNoiseScale" : 1
                  }
               ],
               "type" : "standard"
            },
            "substrate" : {
               "caves" : [],
               "surface" : [
                  {
                     "averageDepth" : 7,
                     "blockType" : "ICE",
                     "depthNoise" : {
                        "frequency" : [ 1, 1 ],
                        "offset" : [ 390.7958984375, -43.45703125 ],
                        "type" : "perlin"
                     },
                     "depthNoiseScale" : 3,
                     "maxGradient" : 3,
                     "maxY" : 256
                  }
               ],
               "type" : "standard"
            }
         }
      ],
      "caves" : {
         "frequency" : [ 0.445000022649765, 1.093000054359436, 0.445000022649765 ],
         "fun" : {
            "frequency" : [ 1.215000033378601, 0.4490000307559967, 1.215000033378601 ],
            "offset" : [ 0, 0, 0 ],
            "terms" : [
               {
                  "fun" : {
                     "frequency" : [ 0.937000036239624, 1.095000028610229, 0.937000036239624 ],
                     "offset" : [ 0, 0, 0 ],
                     "terms" : [
                        {
                           "fun" : {
                              "frequency" : [ 1.223000049591064, 1.634000062942505, 1.223000049591064 ],
                              "fun" : {
                                 "frequency" : [ 1.105000019073486, 0.909000039100647, 1.105000019073486 ],
                                 "offset" : [ -388.0126953125, -326.8798828125, -108.447265625 ],
                                 "type" : "perlin"
                              },
                              "offset" : [ 0, 0, 0 ],
                              "scale" : 3.669999837875366,
                              "type" : "interpolated"
                           },
                           "power" : 1.179999947547913
                        },
                        {
                           "fun" : {
                              "frequency" : [ 1.358000040054321, 1.064000010490417, 1.358000040054321 ],
                              "fun" : {
                                 "cellCount" : 4,
                                 "cellScale" : 2.119999885559082,
                                 "components" : [
                                    {
                                       "k" : 2,
                                       "multiplier" : 0.04900000244379044,
                                       "power" : 3.19700026512146
                                    }
                                 ],
                                 "frequency" : [ 1.203000068664551, 0.7040000557899475, 1.203000068664551 ],
                                 "offset" : [ -282.1533203125, -267.28515625, 390.7958984375 ],
                                 "type" : "worley"
                              },
                              "offset" : [ 0, 0, 0 ],
                              "scale" : 7.099999904632568,
                              "type" : "interpolated"
                           },
                           "power" : 1.299999952316284
                        }
                     ],
                     "type" : "product"
                  },
                  "power" : 2.25
               },
               {
                  "fun" : {
                     "frequency" : [ 1.353000044822693, 1.122000098228455, 1.353000044822693 ],
                     "offset" : [ -43.45703125, -304.736328125, -396.2646484375 ],
                     "type" : "perlin"
                  },
                  "power" : 0.7199999690055847
               }
            ],
            "type" : "product"
         },
         "offset" : [ 0, 0, 0 ],
         "scale" : 6.739999771118164,
         "type" : "interpolated"
      },
      "distortion" : {
         "frequency" : [ 1.358000040054321, 1.264000058174133, 1.358000040054321 ],
         "fun" : {
            "frequency" : [ 1.152999997138977, 1.385000109672546, 1.152999997138977 ],
            "offset" : [ 0, 0, 0 ],
            "terms" : [
               {
                  "fun" : {
                     "frequency" : [ 0.9360000491142273, 1.252000093460083, 0.9360000491142273 ],
                     "offset" : [ 3.8330078125, -282.0068359375, 359.6435546875 ],
                     "type" : "perlin"
                  },
                  "multiplier" : 0.6899999976158142,
                  "power" : 1.599999904632568
               },
               {
                  "fun" : {
                     "cellCount" : 8,
                     "cellScale" : 3.659999847412109,
                     "components" : [
                        {
                           "k" : 2,
                           "multiplier" : 0.4680000245571136,
                           "power" : 4
                        },
                        {
                           "k" : 0,
                           "multiplier" : 1,
                           "power" : 2
                        }
                     ],
                     "frequency" : [ 0.9610000252723694, 1.115000009536743, 0.9610000252723694 ],
                     "offset" : [ -157.568359375, -58.7646484375, -343.701171875 ],
                     "type" : "worley"
                  },
                  "multiplier" : 0.2099999934434891,
                  "power" : 1.829999923706055
               }
            ],
            "type" : "sum"
         },
         "offset" : [ 0, 0, 0 ],
         "scale" : 0.1099999994039536,
         "type" : "interpolated"
      },
      "distribution" : {
         "altitude" : {
            "frequency" : [ 0.6530000567436218, 0.6530000567436218 ],
            "fun" : {
               "frequency" : [ 0.5790000557899475, 0.5790000557899475 ],
               "offset" : [ 0, 0 ],
               "terms" : [
                  {
                     "fun" : {
                        "frequency" : [ 0.8870000243186951, 0.8870000243186951 ],
                        "fun" : {
                           "frequency" : [ 1.537000060081482, 1.537000060081482 ],
                           "fun" : {
                              "cellCount" : 4,
                              "cellScale" : 13.63000011444092,
                              "components" : [
                                 {
                                    "k" : 2,
                                    "multiplier" : 0.2560000121593475,
                                    "power" : 1.891000032424927
                                 },
                                 {
                                    "k" : 2,
                                    "multiplier" : -0.3080000281333923,
                                    "power" : 1.883000135421753
                                 }
                              ],
                              "frequency" : [ 1.200000047683716, 1.200000047683716 ],
                              "offset" : [ -245.361328125, 246.97265625 ],
                              "type" : "worley"
                           },
                           "octaves" : [
                              {
                                 "multiplier" : 0.164000004529953,
                                 "offset" : [ -260.7177734375, 287.1337890625 ],
                                 "scale" : 3.309999942779541
                              },
                              {
                                 "multiplier" : 0.4000000059604645,
                                 "offset" : [ 168.3837890625, 10.8154296875 ],
                                 "scale" : -1.809999942779541
                              },
                              {
                                 "multiplier" : 0.5649999976158142,
                                 "offset" : [ -156.8115234375, -388.0126953125 ],
                                 "scale" : 3.399999856948853
                              }
                           ],
                           "offset" : [ 0, 0 ],
                           "type" : "fractal"
                        },
                        "offset" : [ 0, 0 ],
                        "scale" : 1.709999918937683,
                        "type" : "interpolated"
                     },
                     "multiplier" : 1,
                     "power" : 1.620000004768372
                  },
                  {
                     "fun" : {
                        "frequency" : [ 1, 1 ],
                        "offset" : [ -326.8798828125, -108.447265625 ],
                        "type" : "perlin"
                     },
                     "multiplier" : 1,
                     "power" : 1.599999904632568
                  }
               ],
               "type" : "sum"
            },
            "offset" : [ 0, 0 ],
            "scale" : 2.079999923706055,
            "type" : "interpolated"
         },
         "humidity" : {
            "frequency" : [ 1, 1 ],
            "offset" : [ 258.251953125, 197.265625 ],
            "type" : "perlin"
         },
         "temperature" : {
            "frequency" : [ 0.2939999997615814, 0.2939999997615814 ],
            "offset" : [ 0, 0 ],
            "terms" : [
               {
                  "fun" : {
                     "frequency" : [ 0.6420000195503235, 0.6420000195503235 ],
                     "offset" : [ -260.7177734375, 287.1337890625 ],
                     "type" : "simplex"
                  },
                  "multiplier" : -0.2800000011920929,
                  "power" : 2.419999837875366
               },
               {
                  "fun" : {
                     "cellCount" : 4,
                     "cellScale" : 11.13000011444092,
                     "components" : [
                        {
                           "k" : 2,
                           "multiplier" : 0.6530000567436218,
                           "power" : 2.391000032424927
                        },
                        {
                           "k" : 1,
                           "multiplier" : 0.7260000109672546,
                           "power" : 0.8260000348091125
                        }
                     ],
                     "frequency" : [ 1.299000024795532, 1.299000024795532 ],
                     "offset" : [ 168.3837890625, 10.8154296875 ],
                     "type" : "worley"
                  },
                  "multiplier" : 0.03999999910593033,
                  "power" : 1.5
               }
            ],
            "type" : "sum"
         },
         "vegetation" : null
      },
      "drop" : {
         "clamp" : true,
         "clampPower" : 10,
         "frequency" : [ 1.008000016212463, 1.008000016212463 ],
         "fun" : {
            "base" : {
               "frequency" : [ 1.314000010490417, 1.314000010490417 ],
               "fun" : {
                  "frequency" : [ 1.382000088691711, 1.382000088691711 ],
                  "fun" : {
                     "frequency" : [ 1.068000078201294, 1.068000078201294 ],
                     "offset" : [ 391.9677734375, 201.220703125 ],
                     "type" : "perlin"
                  },
                  "octaves" : [
                     {
                        "multiplier" : -1.380000114440918,
                        "offset" : [ -123.5595703125, -264.8193359375 ],
                        "scale" : -7.279999732971191
                     }
                  ],
                  "offset" : [ 0, 0 ],
                  "type" : "fractal"
               },
               "offset" : [ 0, 0 ],
               "scale" : 2.190000057220459,
               "type" : "interpolated"
            },
            "f1" : {
               "cellCount" : 3,
               "cellScale" : 9,
               "components" : [
                  {
                     "k" : 1,
                     "multiplier" : 0.1760000139474869,
                     "power" : 2.325000047683716
                  },
                  {
                     "k" : 2,
                     "multiplier" : -0.07500000298023224,
                     "power" : 1.648000121116638
                  }
               ],
               "frequency" : [ 1.216000080108643, 1.216000080108643 ],
               "offset" : [ 242.28515625, 13.671875 ],
               "type" : "worley"
            },
            "f2" : {
               "frequency" : [ 0.9240000247955322, 0.9240000247955322 ],
               "offset" : [ 125.830078125, -6.494140625 ],
               "type" : "perlin"
            },
            "frequency" : [ 0.3100000023841858, 0.3100000023841858 ],
            "offset" : [ 0, 0 ],
            "type" : "lerp"
         },
         "max" : 0.2299999892711639,
         "min" : -1.029999971389771,
         "offset" : [ 0, 0 ],
         "type" : "remap"
      },
      "lowerSea" : {
         "level" : 16,
         "liquidType" : "WATER"
      },
      "sea" : {
         "level" : 89,
         "liquidType" : "WATER"
      },
      "shrink" : {
         "clamp" : true,
         "clampPower" : 6.369999885559082,
         "frequency" : [ 1.739000082015991, 1.739000082015991 ],
         "fun" : {
            "frequency" : [ 1.514000058174133, 1.514000058174133 ],
            "fun" : {
               "cellCount" : 2,
               "cellScale" : 1.189999938011169,
               "components" : [
                  {
                     "k" : 2,
                     "multiplier" : 0.02000000141561031,
                     "power" : 0.2860000133514404
                  }
               ],
               "frequency" : [ 0.8400000333786011, 0.8400000333786011 ],
               "offset" : [ -260.7177734375, 287.1337890625 ],
               "type" : "worley"
            },
            "offset" : [ 0, 0 ],
            "scale" : 3.029999971389771,
            "type" : "interpolated"
         },
         "max" : 0.3299999833106995,
         "min" : -0.7599999904632568,
         "offset" : [ 0, 0 ],
         "type" : "remap"
      }
   },
   "name" : "Shuto"
}
