var APP_DATA = {
  palasia: [
    {
      id: "0-hall",
      name: "HAll",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.6162212434372556,
          pitch: 0.20333159711622173,
          rotation: 7.0685834705770345,
          target: "1-hall-2",
        },
      ],
      infoHotspots: [
        {
          yaw: 2.7851187311630783,
          pitch: 1.531893977609089,
          title: "Hall",
          text: "",
        },
      ],
    },
    {
      id: "1-hall-2",
      name: "Hall (2)",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.7096473705804343,
          pitch: 0.49449301437690707,
          rotation: 0,
          target: "0-hall",
        },
        {
          yaw: -0.5312979811456202,
          pitch: 0.320790207253669,
          rotation: 0,
          target: "2-badroom",
        },
        {
          yaw: -3.004362569725135,
          pitch: 0.3006901257675718,
          rotation: 9.42477796076938,
          target: "3-bathroom",
        },
      ],
      infoHotspots: [
        {
          yaw: -1.4302538581570694,
          pitch: 1.5612711921772258,
          title: "Plasia",
          text: "Hall",
        },
      ],
    },
    {
      id: "2-badroom",
      name: "Badroom",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.8066162994230126,
          pitch: 0.22226116571357224,
          rotation: 0.7853981633974483,
          target: "1-hall-2",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.6767045853802607,
          pitch: 1.558198043991112,
          title: "Badroom",
          text: "",
        },
      ],
    },
    {
      id: "3-bathroom",
      name: "Bathroom",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [
        {
          yaw: 2.980051951324521,
          pitch: 1.5502567883198193,
          title: "Bathroom",
          text: "",
        },
      ],
    },
  ],
  ashishnagar: [
    {
      id: "0-outside",
      name: "Outside",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: 2.0305549586389278,
        pitch: -0.10730399836803883,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: 1.5156987910588366,
          pitch: 0.3660460672915491,
          rotation: 0,
          target: "1-courtyard",
        },
      ],
      infoHotspots: [
        {
          yaw: 2.290940571729573,
          pitch: 1.514286464418074,
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "1-courtyard",
      name: "Courtyard",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: 0.16875339896206754,
        pitch: 0.046909889552047446,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: 0.2207899699757334,
          pitch: 0.16483955438500608,
          rotation: 0,
          target: "2-passage",
        },
        {
          yaw: -2.963998672745303,
          pitch: 0.21015871411534448,
          rotation: 0,
          target: "0-outside",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.8743362683389577,
          pitch: 1.5468849511713767,
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "2-passage",
      name: "Passage",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: -1.9824257279461683,
        pitch: 0.3197772790679494,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: -0.0036848611174615797,
          pitch: 0.11394416080772629,
          rotation: 0,
          target: "4-bathroom",
        },
        {
          yaw: -0.08064128082486377,
          pitch: 0.29985096602265315,
          rotation: 4.71238898038469,
          target: "3-kitchen",
        },
        {
          yaw: -2.431288550520202,
          pitch: -0.1301434605709595,
          rotation: 0.7853981633974483,
          target: "5-steps",
        },
      ],
      infoHotspots: [
        {
          yaw: 3.097452729929328,
          pitch: 1.541349798317185,
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "3-kitchen",
      name: "Kitchen",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: -1.1331009602855318,
        pitch: 0.4244184364228083,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: 1.4813065816817605,
          pitch: 0.37773407939672055,
          rotation: 1.5707963267948966,
          target: "2-passage",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-bathroom",
      name: "Bathroom",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: 2.1497283457618197,
        pitch: 0.7171910030253379,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: 2.5086379505483727,
          pitch: 0.449804559483054,
          rotation: 0,
          target: "2-passage",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.404326144989801,
          pitch: 1.5430712039649004,
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "5-steps",
      name: "Steps",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: -3.064251153682097,
        pitch: 0.5189383069883533,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: 2.022663596895632,
          pitch: 0.47906269379255306,
          rotation: 0.7853981633974483,
          target: "6-hall",
        },
        {
          yaw: -3.0716419530652104,
          pitch: 0.39483418922318236,
          rotation: 0,
          target: "2-passage",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.9971544617925545,
          pitch: 1.5401374141260051,
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "6-hall",
      name: "Hall",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.728809839393918,
          pitch: 0.15095306951984,
          rotation: 4.71238898038469,
          target: "5-steps",
        },
        {
          yaw: -3.119674043353454,
          pitch: 0.2987925081535252,
          rotation: 0,
          target: "7-bolcony",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.7830696528725056,
          pitch: 1.5186797815867603,
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "7-bolcony",
      name: "Bolcony",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: -0.09453678699886581,
        pitch: 0.242051175400249,
        fov: 1.3687812585745385,
      },
      linkHotspots: [
        {
          yaw: 3.138276902253354,
          pitch: 0.3004519818908733,
          rotation: 0,
          target: "6-hall",
        },
      ],
      infoHotspots: [
        {
          yaw: 3.0883659446720504,
          pitch: 1.5477019743527638,
          title: "",
          text: "",
        },
      ],
    },
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
