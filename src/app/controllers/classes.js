const form = {
  height: 10,
  description: "X",
  area: 1000,
  population: 20,
};

// GRUPO A
const residencial = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        {
          parameter: "area",
          rule: ">",
          value: 1200,
          its: [4, 17],
        },
        {
          parameter: "population",
          rule: ">",
          value: 200,
          its: [38],
        },
      ],
      its: [8, 13, 15, 16],
    },
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 8, 13, 15, 16, 17, 38],
    },
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 13, 14, 15, 16, 17, 38],
    },
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 12, 13, 14, 15, 16, 17, 38],
    },
  ],
};

// GRUPO B
const hospedagem = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        {
          parameter: "area",
          rule: ">",
          value: 930,
          its: [4, 14, 17],
        },
        {
          parameter: "population",
          rule: ">",
          value: 200,
          its: [38],
        },
      ],
      its: [8, 13, 14, 15, 16, 17],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 12, 13, 14, 15, 16, 17, 38],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 38,],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [
        4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 38, 41],
    },
  ],
};

// GRUPO C
const comercial = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        { // rule 1 e 8
          parameter: "area",
          rule: ">",
          value: 930,
          its: [4, 11, 17, 19],
        },
        { // rule 2
          parameter: "area",
          rule: ">",
          value: 200,
          its: [7, 6],
        },
        { // rule 3
          parameter: "area",
          rule: ">",
          value: 2000,
          its: [11, 14],
        },
        { // rule 3
          parameter: "population",
          rule: ">",
          value: 500,
          its: [41],
        },
      ],
      its: [8, 13, 14, 15, 16, 17],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 7, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 38, 41],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 18, 38, 41],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [4, 6, 7, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 18, 38, 41],
    },
  ],
};

// GRUPO D
const professional = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        { // rule 1 e 5
          parameter: "area",
          rule: ">",
          value: 930,
          its: [17, 4],
        },
        { // rule 4
          parameter: "area",
          rule: ">",
          value: 2000,
          its: [14],
        },
        { // rule 3
          parameter: "population",
          rule: ">",
          value: 200,
          its: [38],
        },
      ],
      its: [


      ],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 7, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 38, 41],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 18, 38, 41],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [4, 6, 7, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 18, 38, 41],
    },
  ],
};

// GRUPO E
const educacional = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        { // rule 1 e 5
          parameter: "area",
          rule: ">",
          value: 930,
          its: [4, 14, 17],
        },
      ],
      its: [8, 12, 13, 15, 16, 38],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 12, 13, 14, 15, 16, 17],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 38],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 38, 41],
    },
  ],
};

const reunion = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        { // rule 1 e 8
          parameter: "area",
          rule: ">",
          value: 930,
          its: [4, 14, 17, 12, 38],
        },
        { // rule 2
          parameter: "population",
          rule: ">",
          value: 200,
          its: [12, 38],
        },

      ],
      its: [6, 8, 13, 15, 16],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 38],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 38],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 38, 41],
    },
  ],
};

const healthy = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        { // rule 1 e 8
          parameter: "area",
          rule: ">",
          value: 930,
          its: [4, 17, 12, 38],
        },
      ],
      its: [4, 8, 13, 15, 16],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 8, 12, 13, 14, 15, 16, 17, 38],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 38],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [4, 6, 7, 8, 12, 13, 14, 14, 15, 16, 17, 18, 38,],
    },
  ],
};

const institutional = {
  classifications: [
    {
      rules: [
        {
          parameter: "height",
          rule: "<=",
          value: 12,
        },
      ],
      especial: [
        { // rule 1 e 8
          parameter: "area",
          rule: ">",
          value: 930,
          its: [4, 6, 11, 14, 17],
        },
      ],
      its: [8, 12, 13, 15, 16, 38,],
    },
    // H>12 e H<=30
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 12,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 30,
        },
      ],
      especial: [],
      its: [4, 6, 8, 11, 12, 13, 14, 14, 15, 16, 17, 38, 41],
    },
    // H>30 e H<=54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 30,
        },
        {
          parameter: "height",
          rule: "<=",
          value: 54,
        },
      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 18, 38, 41],
    },
    // H>54
    {
      rules: [
        {
          parameter: "height",
          rule: ">",
          value: 54,
        },

      ],
      especial: [],
      its: [4, 6, 7, 8, 11, 12, 13, 14, 14, 15, 16, 17, 18, 38, 41],
    },
  ],
};



module.exports = {
  educacional, hospedagem, professional, residencial, comercial, reunion, healthy, institutional
}


