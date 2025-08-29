import blockImg from "../assets/mining-farm.jpg";
export const BitcoinApi = {
  getData: () => {
    return [
      {
        id: 1,
        minerName: "Antminer S19 Pro",
        blocks: [
          {
            title: "Block 1",
            miningPerHour: 0.000352,
            img: blockImg,
            enabled: true,
          },
          {
            title: "Block 2",
            miningPerHour: 0.000352,
            img: blockImg,
            enabled: true,
          },
          {
            title: "Block 3",
            miningPerHour: 0.000352,
            img: blockImg,
            enabled: true,
          },
        ],
      },
      {
        id: 2,
        minerName: "Whatsminer M30S+",
        blocks: [
          {
            title: "Block 1",
            miningPerHour: 0.000334,
            img: blockImg,
            enabled: true,
          },
          {
            title: "Block 2",
            miningPerHour: 0.000334,
            img: blockImg,
            enabled: true,
          },
          {
            title: "Block 3",
            miningPerHour: 0.000334,
            img: blockImg,
            enabled: true,
          },
        ],
      },
    ];
  },
};
