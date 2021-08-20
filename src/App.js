import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';
import PredictionRequest from './components/api/predictions';
import Comparison from './components/components/Comparsion/Comparison';
import H2H from './components/components/H2H/H2H';

function App() {

  const [data, setData] = useState(
        {
            "predictions": {
                "winner": {
                    "id": 1189,
                    "name": "Deportivo Santani",
                    "comment": "Win or draw"
                },
                "win_or_draw": true,
                "under_over": "-3.5",
                "goals": {
                    "home": "-2.5",
                    "away": "-1.5"
                },
                "advice": "Combo Double chance : Deportivo Santani or draw and -3.5 goals",
                "percent": {
                    "home": "45%",
                    "draw": "45%",
                    "away": "10%"
                }
            },
            "league": {
                "id": 252,
                "name": "Primera Division - Clausura",
                "country": "Paraguay",
                "logo": "https://media.api-sports.io/football/leagues/252.png",
                "flag": "https://media.api-sports.io/flags/py.svg",
                "season": 2019
            },
            "teams": {
                "home": {
                    "id": 1189,
                    "name": "Deportivo Santani",
                    "logo": "https://media.api-sports.io/football/teams/1189.png",
                    "last_5": {
                        "form": "60%",
                        "att": "60%",
                        "def": "0%",
                        "goals": {
                            "for": {
                                "total": 3,
                                "average": "0.6"
                            },
                            "against": {
                                "total": 5,
                                "average": "1.0"
                            }
                        }
                    },
                    "league": {
                        "form": "LDLDLDLWLWWLW",
                        "fixtures": {
                            "played": {
                                "home": 6,
                                "away": 7,
                                "total": 13
                            },
                            "wins": {
                                "home": 2,
                                "away": 2,
                                "total": 4
                            },
                            "draws": {
                                "home": 3,
                                "away": 0,
                                "total": 3
                            },
                            "loses": {
                                "home": 1,
                                "away": 5,
                                "total": 6
                            }
                        },
                        "goals": {
                            "for": {
                                "total": {
                                    "home": 7,
                                    "away": 4,
                                    "total": 11
                                },
                                "average": {
                                    "home": "1.2",
                                    "away": "0.6",
                                    "total": "0.8"
                                },
                                "minute": {
                                    "0-15": {
                                        "total": null,
                                        "percentage": null
                                    },
                                    "16-30": {
                                        "total": 4,
                                        "percentage": "40.00%"
                                    },
                                    "31-45": {
                                        "total": 2,
                                        "percentage": "20.00%"
                                    },
                                    "46-60": {
                                        "total": null,
                                        "percentage": null
                                    },
                                    "61-75": {
                                        "total": 3,
                                        "percentage": "30.00%"
                                    },
                                    "76-90": {
                                        "total": 1,
                                        "percentage": "10.00%"
                                    },
                                    "91-105": {
                                        "total": null,
                                        "percentage": null
                                    },
                                    "106-120": {
                                        "total": null,
                                        "percentage": null
                                    }
                                }
                            },
                            "against": {
                                "total": {
                                    "home": 6,
                                    "away": 14,
                                    "total": 20
                                },
                                "average": {
                                    "home": "1.0",
                                    "away": "2.0",
                                    "total": "1.5"
                                },
                                "minute": {
                                    "0-15": {
                                        "total": 3,
                                        "percentage": "14.29%"
                                    },
                                    "16-30": {
                                        "total": 4,
                                        "percentage": "19.05%"
                                    },
                                    "31-45": {
                                        "total": 2,
                                        "percentage": "9.52%"
                                    },
                                    "46-60": {
                                        "total": null,
                                        "percentage": null
                                    },
                                    "61-75": {
                                        "total": 5,
                                        "percentage": "23.81%"
                                    },
                                    "76-90": {
                                        "total": 4,
                                        "percentage": "19.05%"
                                    },
                                    "91-105": {
                                        "total": 3,
                                        "percentage": "14.29%"
                                    },
                                    "106-120": {
                                        "total": null,
                                        "percentage": null
                                    }
                                }
                            }
                        },
                        "biggest": {
                            "streak": {
                                "wins": 2,
                                "draws": 1,
                                "loses": 1
                            },
                            "wins": {
                                "home": "3-1",
                                "away": "0-1"
                            },
                            "loses": {
                                "home": "0-2",
                                "away": "4-0"
                            },
                            "goals": {
                                "for": {
                                    "home": 3,
                                    "away": 1
                                },
                                "against": {
                                    "home": 2,
                                    "away": 4
                                }
                            }
                        },
                        "clean_sheet": {
                            "home": 1,
                            "away": 2,
                            "total": 3
                        },
                        "failed_to_score": {
                            "home": 1,
                            "away": 3,
                            "total": 4
                        },
                        "penalty": {
                            "scored": {
                                "total": 0,
                                "percentage": "0%"
                            },
                            "missed": {
                                "total": 0,
                                "percentage": "0%"
                            },
                            "total": 0
                        },
                        "lineups": [],
                        "cards": {
                            "yellow": {
                                "0-15": {
                                    "total": 3,
                                    "percentage": "9.38%"
                                },
                                "16-30": {
                                    "total": 5,
                                    "percentage": "15.63%"
                                },
                                "31-45": {
                                    "total": 3,
                                    "percentage": "9.38%"
                                },
                                "46-60": {
                                    "total": 5,
                                    "percentage": "15.63%"
                                },
                                "61-75": {
                                    "total": 4,
                                    "percentage": "12.50%"
                                },
                                "76-90": {
                                    "total": 12,
                                    "percentage": "37.50%"
                                },
                                "91-105": {
                                    "total": null,
                                    "percentage": null
                                },
                                "106-120": {
                                    "total": null,
                                    "percentage": null
                                }
                            },
                            "red": {
                                "0-15": {
                                    "total": null,
                                    "percentage": null
                                },
                                "16-30": {
                                    "total": null,
                                    "percentage": null
                                },
                                "31-45": {
                                    "total": null,
                                    "percentage": null
                                },
                                "46-60": {
                                    "total": null,
                                    "percentage": null
                                },
                                "61-75": {
                                    "total": null,
                                    "percentage": null
                                },
                                "76-90": {
                                    "total": null,
                                    "percentage": null
                                },
                                "91-105": {
                                    "total": null,
                                    "percentage": null
                                },
                                "106-120": {
                                    "total": null,
                                    "percentage": null
                                }
                            }
                        }
                    }
                },
                "away": {
                    "id": 1180,
                    "name": "Deportivo Capiata",
                    "logo": "https://media.api-sports.io/football/teams/1180.png",
                    "last_5": {
                        "form": "40%",
                        "att": "80%",
                        "def": "0%",
                        "goals": {
                            "for": {
                                "total": 4,
                                "average": "0.8"
                            },
                            "against": {
                                "total": 8,
                                "average": "1.6"
                            }
                        }
                    },
                    "league": {
                        "form": "WLWLDLDLLLLWW",
                        "fixtures": {
                            "played": {
                                "home": 7,
                                "away": 6,
                                "total": 13
                            },
                            "wins": {
                                "home": 3,
                                "away": 1,
                                "total": 4
                            },
                            "draws": {
                                "home": 0,
                                "away": 2,
                                "total": 2
                            },
                            "loses": {
                                "home": 4,
                                "away": 3,
                                "total": 7
                            }
                        },
                        "goals": {
                            "for": {
                                "total": {
                                    "home": 8,
                                    "away": 3,
                                    "total": 11
                                },
                                "average": {
                                    "home": "1.1",
                                    "away": "0.5",
                                    "total": "0.8"
                                },
                                "minute": {
                                    "0-15": {
                                        "total": 2,
                                        "percentage": "18.18%"
                                    },
                                    "16-30": {
                                        "total": null,
                                        "percentage": null
                                    },
                                    "31-45": {
                                        "total": 1,
                                        "percentage": "9.09%"
                                    },
                                    "46-60": {
                                        "total": 1,
                                        "percentage": "9.09%"
                                    },
                                    "61-75": {
                                        "total": 4,
                                        "percentage": "36.36%"
                                    },
                                    "76-90": {
                                        "total": 1,
                                        "percentage": "9.09%"
                                    },
                                    "91-105": {
                                        "total": 2,
                                        "percentage": "18.18%"
                                    },
                                    "106-120": {
                                        "total": null,
                                        "percentage": null
                                    }
                                }
                            },
                            "against": {
                                "total": {
                                    "home": 14,
                                    "away": 10,
                                    "total": 24
                                },
                                "average": {
                                    "home": "2.0",
                                    "away": "1.7",
                                    "total": "1.8"
                                },
                                "minute": {
                                    "0-15": {
                                        "total": 5,
                                        "percentage": "20.83%"
                                    },
                                    "16-30": {
                                        "total": 2,
                                        "percentage": "8.33%"
                                    },
                                    "31-45": {
                                        "total": 4,
                                        "percentage": "16.67%"
                                    },
                                    "46-60": {
                                        "total": 4,
                                        "percentage": "16.67%"
                                    },
                                    "61-75": {
                                        "total": 4,
                                        "percentage": "16.67%"
                                    },
                                    "76-90": {
                                        "total": 3,
                                        "percentage": "12.50%"
                                    },
                                    "91-105": {
                                        "total": 2,
                                        "percentage": "8.33%"
                                    },
                                    "106-120": {
                                        "total": null,
                                        "percentage": null
                                    }
                                }
                            }
                        },
                        "biggest": {
                            "streak": {
                                "wins": 1,
                                "draws": 1,
                                "loses": 4
                            },
                            "wins": {
                                "home": "3-1",
                                "away": "0-1"
                            },
                            "loses": {
                                "home": "0-6",
                                "away": "3-0"
                            },
                            "goals": {
                                "for": {
                                    "home": 3,
                                    "away": 1
                                },
                                "against": {
                                    "home": 6,
                                    "away": 3
                                }
                            }
                        },
                        "clean_sheet": {
                            "home": 1,
                            "away": 1,
                            "total": 2
                        },
                        "failed_to_score": {
                            "home": 3,
                            "away": 3,
                            "total": 6
                        },
                        "penalty": {
                            "scored": {
                                "total": 2,
                                "percentage": "100.00%"
                            },
                            "missed": {
                                "total": 0,
                                "percentage": "0%"
                            },
                            "total": 2
                        },
                        "lineups": [],
                        "cards": {
                            "yellow": {
                                "0-15": {
                                    "total": 5,
                                    "percentage": "12.20%"
                                },
                                "16-30": {
                                    "total": 5,
                                    "percentage": "12.20%"
                                },
                                "31-45": {
                                    "total": 7,
                                    "percentage": "17.07%"
                                },
                                "46-60": {
                                    "total": 12,
                                    "percentage": "29.27%"
                                },
                                "61-75": {
                                    "total": 6,
                                    "percentage": "14.63%"
                                },
                                "76-90": {
                                    "total": 6,
                                    "percentage": "14.63%"
                                },
                                "91-105": {
                                    "total": null,
                                    "percentage": null
                                },
                                "106-120": {
                                    "total": null,
                                    "percentage": null
                                }
                            },
                            "red": {
                                "0-15": {
                                    "total": null,
                                    "percentage": null
                                },
                                "16-30": {
                                    "total": null,
                                    "percentage": null
                                },
                                "31-45": {
                                    "total": null,
                                    "percentage": null
                                },
                                "46-60": {
                                    "total": 1,
                                    "percentage": "50.00%"
                                },
                                "61-75": {
                                    "total": 1,
                                    "percentage": "50.00%"
                                },
                                "76-90": {
                                    "total": null,
                                    "percentage": null
                                },
                                "91-105": {
                                    "total": null,
                                    "percentage": null
                                },
                                "106-120": {
                                    "total": null,
                                    "percentage": null
                                }
                            }
                        }
                    }
                }
            },
            "comparison": {
                "form": {
                    "home": "60%",
                    "away": "40%"
                },
                "att": {
                    "home": "43%",
                    "away": "57%"
                },
                "def": {
                    "home": "62%",
                    "away": "38%"
                },
                "poisson_distribution": {
                    "home": "75%",
                    "away": "25%"
                },
                "h2h": {
                    "home": "29%",
                    "away": "71%"
                },
                "goals": {
                    "home": "40%",
                    "away": "60%"
                },
                "total": {
                    "home": "51.5%",
                    "away": "48.5%"
                }
            },
            "h2h": [
                {
                    "fixture": {
                        "id": 198706,
                        "referee": "J. Méndez",
                        "timezone": "UTC",
                        "date": "2019-07-27T19:30:00+00:00",
                        "timestamp": 1564255800,
                        "periods": {
                            "first": 1564255800,
                            "second": 1564259400
                        },
                        "venue": {
                            "id": null,
                            "name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90
                        }
                    },
                    "league": {
                        "id": 252,
                        "name": "Primera Division - Clausura",
                        "country": "Paraguay",
                        "logo": "https://media.api-sports.io/football/leagues/252.png",
                        "flag": "https://media.api-sports.io/flags/py.svg",
                        "season": 2019,
                        "round": "Clausura - 3"
                    },
                    "teams": {
                        "home": {
                            "id": 1180,
                            "name": "Deportivo Capiata",
                            "logo": "https://media.api-sports.io/football/teams/1180.png",
                            "winner": true
                        },
                        "away": {
                            "id": 1189,
                            "name": "Deportivo Santani",
                            "logo": "https://media.api-sports.io/football/teams/1189.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 3,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 3,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 144182,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2019-03-25T23:15:00+00:00",
                        "timestamp": 1553555700,
                        "periods": {
                            "first": 1553555700,
                            "second": 1553559300
                        },
                        "venue": {
                            "id": null,
                            "name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90
                        }
                    },
                    "league": {
                        "id": 250,
                        "name": "Primera Division - Apertura",
                        "country": "Paraguay",
                        "logo": "https://media.api-sports.io/football/leagues/250.png",
                        "flag": "https://media.api-sports.io/flags/py.svg",
                        "season": 2019,
                        "round": "Regular Season - 12"
                    },
                    "teams": {
                        "home": {
                            "id": 1180,
                            "name": "Deportivo Capiata",
                            "logo": "https://media.api-sports.io/football/teams/1180.png",
                            "winner": true
                        },
                        "away": {
                            "id": 1189,
                            "name": "Deportivo Santani",
                            "logo": "https://media.api-sports.io/football/teams/1189.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 2,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 144113,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2019-01-23T21:00:00+00:00",
                        "timestamp": 1548277200,
                        "periods": {
                            "first": 1548277200,
                            "second": 1548280800
                        },
                        "venue": {
                            "id": null,
                            "name": "Estadio Juan José Vázquez (San Estanislao)",
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90
                        }
                    },
                    "league": {
                        "id": 250,
                        "name": "Primera Division - Apertura",
                        "country": "Paraguay",
                        "logo": "https://media.api-sports.io/football/leagues/250.png",
                        "flag": "https://media.api-sports.io/flags/py.svg",
                        "season": 2019,
                        "round": "Regular Season - 1"
                    },
                    "teams": {
                        "home": {
                            "id": 1189,
                            "name": "Deportivo Santani",
                            "logo": "https://media.api-sports.io/football/teams/1189.png",
                            "winner": null
                        },
                        "away": {
                            "id": 1180,
                            "name": "Deportivo Capiata",
                            "logo": "https://media.api-sports.io/football/teams/1180.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 144745,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2018-11-12T20:45:00+00:00",
                        "timestamp": 1542055500,
                        "periods": {
                            "first": 1542055500,
                            "second": 1542059100
                        },
                        "venue": {
                            "id": null,
                            "name": "Estadio Lic. Erico Galeano Segovia (Capiatá)",
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90
                        }
                    },
                    "league": {
                        "id": 252,
                        "name": "Primera Division - Clausura",
                        "country": "Paraguay",
                        "logo": "https://media.api-sports.io/football/leagues/252.png",
                        "flag": "https://media.api-sports.io/flags/py.svg",
                        "season": 2018,
                        "round": "Regular Season - 18"
                    },
                    "teams": {
                        "home": {
                            "id": 1180,
                            "name": "Deportivo Capiata",
                            "logo": "https://media.api-sports.io/football/teams/1180.png",
                            "winner": false
                        },
                        "away": {
                            "id": 1189,
                            "name": "Deportivo Santani",
                            "logo": "https://media.api-sports.io/football/teams/1189.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 144679,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2018-08-26T19:30:00+00:00",
                        "timestamp": 1535311800,
                        "periods": {
                            "first": 1535311800,
                            "second": 1535315400
                        },
                        "venue": {
                            "id": null,
                            "name": "Estadio Juan José Vázquez (San Estanislao)",
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90
                        }
                    },
                    "league": {
                        "id": 252,
                        "name": "Primera Division - Clausura",
                        "country": "Paraguay",
                        "logo": "https://media.api-sports.io/football/leagues/252.png",
                        "flag": "https://media.api-sports.io/flags/py.svg",
                        "season": 2018,
                        "round": "Regular Season - 7"
                    },
                    "teams": {
                        "home": {
                            "id": 1189,
                            "name": "Deportivo Santani",
                            "logo": "https://media.api-sports.io/football/teams/1189.png",
                            "winner": false
                        },
                        "away": {
                            "id": 1180,
                            "name": "Deportivo Capiata",
                            "logo": "https://media.api-sports.io/football/teams/1180.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 144330,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2018-05-05T21:30:00+00:00",
                        "timestamp": 1525555800,
                        "periods": {
                            "first": 1525555800,
                            "second": 1525559400
                        },
                        "venue": {
                            "id": null,
                            "name": "Estadio Juan José Vázquez (San Estanislao)",
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90
                        }
                    },
                    "league": {
                        "id": 250,
                        "name": "Primera Division - Apertura",
                        "country": "Paraguay",
                        "logo": "https://media.api-sports.io/football/leagues/250.png",
                        "flag": "https://media.api-sports.io/flags/py.svg",
                        "season": 2018,
                        "round": "Regular Season - 15"
                    },
                    "teams": {
                        "home": {
                            "id": 1189,
                            "name": "Deportivo Santani",
                            "logo": "https://media.api-sports.io/football/teams/1189.png",
                            "winner": null
                        },
                        "away": {
                            "id": 1180,
                            "name": "Deportivo Capiata",
                            "logo": "https://media.api-sports.io/football/teams/1180.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 3,
                        "away": 3
                    },
                    "score": {
                        "halftime": {
                            "home": 2,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 3,
                            "away": 3
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                }
            ]
        }
);
  const [error, setError] = useState('');

  useEffect(() => {
      // const res = PredictionRequest();
      // res.then(res => setData(res.response[0])).catch(err => setError(err.message));       
  },[]);

  console.log('Def data',data, error);

  return (
    <div className="App">
      App
      <Comparison data={data.comparison} />
      <H2H data={data.h2h} />
    </div>
  );
}

export default App;
