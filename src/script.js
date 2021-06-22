const form = {
  height: 10,
  description: "X",
  area: 1000,
  population: 20,
};

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
          return: [4, 17],
        },
        {
          parameter: "population",
          rule: ">",
          value: 200,
          return: [38],
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
          return: [4],
        },
        {
          parameter: "population",
          rule: ">",
          value: 200,
          return: [38],
        },
      ],
      its: [4, 8, 13, 14, 15, 16, 17],
    },
  ],
};
