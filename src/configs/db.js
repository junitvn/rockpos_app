const allProducts = [
  {
    id_product: "8",
    has_combinations: "0",
    reference: "demo_8",
    name: "Black and White",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "9949",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 16.51,
    image_url:
      "https://api.rockpos.com/28-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Black and...",
    has_customizations: "0",
    barcode: "D6qo1XzDGuhNr"
  },
  {
    id_product: "10",
    has_combinations: "0",
    reference: "demo_10",
    name: "Black Princess",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "4991",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 18,
    image_url:
      "https://api.rockpos.com/33-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Black Prin...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 2,
        name: "File",
        required: false,
        type: "file"
      }
    ],
    barcode: "xBMkenOzhLllc"
  },
  {
    id_product: "2",
    has_combinations: "1",
    reference: "demo_2",
    name: "Blouse",
    link_rewrite: "blouse",
    stock: "1758",
    idShop: "1",
    id_product_attribute: "8",
    attributes: [
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "8",
        id_attribute_group: "3",
        attribute: "White",
        group: "Color"
      },
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "11",
        id_attribute_group: "3",
        attribute: "Black",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      }
    ],
    price: 27,
    image_url: "https://api.rockpos.com/7-small_default/blouse.jpg",
    short_name: "Blouse",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 1,
        name: "Weight",
        required: false,
        type: "string"
      }
    ],
    combinations: [
      {
        color: {
          id_attribute: "8",
          id_attribute_group: "3",
          attribute: "White",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "AuTW3hdexk4QT",
        id_combanation: "A1OqJh"
      },
      {
        color: {
          id_attribute: "8",
          id_attribute_group: "3",
          attribute: "White",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "7vsN3cZlhkGVy",
        id_combanation: "2XikZx"
      },
      {
        color: {
          id_attribute: "8",
          id_attribute_group: "3",
          attribute: "White",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "Wfar78haVVBoz",
        id_combanation: "uPEDTe"
      },
      {
        color: {
          id_attribute: "11",
          id_attribute_group: "3",
          attribute: "Black",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "ubSWL5atJkPW5",
        id_combanation: "K6D4kz"
      },
      {
        color: {
          id_attribute: "11",
          id_attribute_group: "3",
          attribute: "Black",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "XvXCqI9pkS3oU",
        id_combanation: "QNsRmK"
      },
      {
        color: {
          id_attribute: "11",
          id_attribute_group: "3",
          attribute: "Black",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "PwnID8NFbzbq9",
        id_combanation: "mfV6EM"
      }
    ],
    barcode: "8tiLGl4sGTB7s"
  },
  {
    id_product: "9",
    has_combinations: "0",
    reference: "demo_9",
    name: "Brown crown",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "1494",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 23.5,
    image_url:
      "https://api.rockpos.com/31-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Brown crown",
    has_customizations: "0",
    barcode: "D6ZR552U2TOqE"
  },
  {
    id_product: "12",
    has_combinations: "0",
    reference: "demo_12",
    name: "Cotton trousers",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "9989",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 30,
    image_url:
      "https://api.rockpos.com/42-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Cotton tro...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 1,
        name: "Weight",
        required: false,
        type: "string"
      }
    ],
    barcode: "GzASPuFMsHHJp"
  },
  {
    id_product: "18",
    has_combinations: "1",
    reference: "demo_16",
    name: "Cute Orange Dress",
    link_rewrite: "test-insert",
    stock: "4500",
    idShop: "1",
    id_product_attribute: "65",
    attributes: [
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "7",
        id_attribute_group: "3",
        attribute: "Beige",
        group: "Color"
      },
      {
        id_attribute: "13",
        id_attribute_group: "3",
        attribute: "Orange",
        group: "Color"
      },
      {
        id_attribute: "5",
        id_attribute_group: "3",
        attribute: "Grey",
        group: "Color"
      }
    ],
    price: 9.9,
    image_url: "https://api.rockpos.com/47-small_default/test-insert.jpg",
    short_name: "Cute Orang...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 2,
        name: "File",
        required: false,
        type: "file"
      }
    ],
    combinations: [
      {
        color: {
          id_attribute: "7",
          id_attribute_group: "3",
          attribute: "Beige",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "oxflLcTC4QkMn",
        id_combanation: "ulvvBx"
      },
      {
        color: {
          id_attribute: "7",
          id_attribute_group: "3",
          attribute: "Beige",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "c8n2gv8UkWGLi",
        id_combanation: "glLWIu"
      },
      {
        color: {
          id_attribute: "7",
          id_attribute_group: "3",
          attribute: "Beige",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "uWXPJ6dueQ6Tw",
        id_combanation: "buEcAf"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "1xdkOHLhgCc5v",
        id_combanation: "J0eI6d"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "kIaylPX85ZAdn",
        id_combanation: "iSvsWB"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "gSTf9GSKByFMZ",
        id_combanation: "kFLUWB"
      },
      {
        color: {
          id_attribute: "5",
          id_attribute_group: "3",
          attribute: "Grey",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "8Q9IgkpggwDgu",
        id_combanation: "Gkgyy2"
      },
      {
        color: {
          id_attribute: "5",
          id_attribute_group: "3",
          attribute: "Grey",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "aoxlzZg23TJx0",
        id_combanation: "BTgH67"
      },
      {
        color: {
          id_attribute: "5",
          id_attribute_group: "3",
          attribute: "Grey",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "FMCxgUTIrAtX6",
        id_combanation: "00UXQ4"
      }
    ],
    barcode: "tUbcH8bZeKZAv"
  },
  {
    id_product: "1",
    has_combinations: "1",
    reference: "demo_1",
    name: "Faded Short Sleeves T-shirt",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "1777",
    idShop: "1",
    id_product_attribute: "2",
    attributes: [
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "14",
        id_attribute_group: "3",
        attribute: "Blue",
        group: "Color"
      },
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "13",
        id_attribute_group: "3",
        attribute: "Orange",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      }
    ],
    price: 16.51,
    image_url:
      "https://api.rockpos.com/1-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Faded Shor...",
    has_customizations: "0",
    combinations: [
      {
        color: {
          id_attribute: "14",
          id_attribute_group: "3",
          attribute: "Blue",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "GbA2ulRf8m2hA",
        id_combanation: "9Usi1r"
      },
      {
        color: {
          id_attribute: "14",
          id_attribute_group: "3",
          attribute: "Blue",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "KE9e20xGZGHdV",
        id_combanation: "syHuhM"
      },
      {
        color: {
          id_attribute: "14",
          id_attribute_group: "3",
          attribute: "Blue",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "SX2nhDOH5XnoE",
        id_combanation: "00NxRg"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "hZEPXb5C1WfJU",
        id_combanation: "BaGivS"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "pcXlMtUwZEOJd",
        id_combanation: "yaMP2U"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "wslJRcdnTIG9f",
        id_combanation: "qh3hdm"
      }
    ],
    barcode: "yJlhAd9b6eLar"
  },
  {
    id_product: "11",
    has_combinations: "0",
    reference: "demo_11",
    name: "Low hoodie",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "991",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 22.35,
    image_url:
      "https://api.rockpos.com/41-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Low hoodie",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 2,
        name: "File",
        required: false,
        type: "file"
      }
    ],
    barcode: "gTLNtqVQgdrFw"
  },
  {
    id_product: "15",
    has_combinations: "0",
    reference: "demo_13",
    name: "Magic flame",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "9990",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 73.5,
    image_url:
      "https://api.rockpos.com/46-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Magic flame",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 1,
        name: "Weight",
        required: false,
        type: "string"
      }
    ],
    barcode: "Dfbd3c6gcsUdz"
  },
  {
    id_product: "13",
    has_combinations: "0",
    reference: "demo_14",
    name: "Ocean queen",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "9968",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 33,
    image_url:
      "https://api.rockpos.com/44-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Ocean queen",
    has_customizations: "0",
    barcode: "vyl5viaSQL5CK"
  },
  {
    id_product: "14",
    has_combinations: "0",
    reference: "demo_15",
    name: "Orange in suit",
    link_rewrite: "faded-short-sleeves-tshirt",
    stock: "9989",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 78,
    image_url:
      "https://api.rockpos.com/45-small_default/faded-short-sleeves-tshirt.jpg",
    short_name: "Orange in...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 1,
        name: "Weight",
        required: false,
        type: "string"
      }
    ],
    barcode: "sJddOTKon9Uo8"
  },
  {
    id_product: "7",
    has_combinations: "1",
    reference: "demo_7",
    name: "Printed Chiffon Dress",
    link_rewrite: "printed-chiffon-dress",
    stock: "1779",
    idShop: "1",
    id_product_attribute: "35",
    attributes: [
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "16",
        id_attribute_group: "3",
        attribute: "Yellow",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "15",
        id_attribute_group: "3",
        attribute: "Green",
        group: "Color"
      }
    ],
    price: 16.4,
    image_url:
      "https://api.rockpos.com/20-small_default/printed-chiffon-dress.jpg",
    short_name: "Printed Ch...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 2,
        name: "File",
        required: false,
        type: "file"
      }
    ],
    combinations: [
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "yW6v6FzXVLxxi",
        id_combanation: "rvNaEc"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "yDD9Tps5XcGqa",
        id_combanation: "CEfJRg"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "SrnK8FgVgUAsb",
        id_combanation: "bkPHlH"
      },
      {
        color: {
          id_attribute: "15",
          id_attribute_group: "3",
          attribute: "Green",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "bq0Slw2K3V9tT",
        id_combanation: "dwoP7h"
      },
      {
        color: {
          id_attribute: "15",
          id_attribute_group: "3",
          attribute: "Green",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "bOBbFnJT0n1Ic",
        id_combanation: "sagmks"
      },
      {
        color: {
          id_attribute: "15",
          id_attribute_group: "3",
          attribute: "Green",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "ZMX8lXJMrsrsL",
        id_combanation: "tVZ4KZ"
      }
    ],
    barcode: "7AAvrwMDWDHHT"
  },
  {
    id_product: "4",
    has_combinations: "1",
    reference: "demo_4",
    name: "Printed Dress",
    link_rewrite: "printed-dress",
    stock: "2395",
    idShop: "1",
    id_product_attribute: "17",
    attributes: [
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "7",
        id_attribute_group: "3",
        attribute: "Beige",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "24",
        id_attribute_group: "3",
        attribute: "Pink",
        group: "Color"
      }
    ],
    price: 50.99,
    image_url: "https://api.rockpos.com/10-small_default/printed-dress.jpg",
    short_name: "Printed Dress",
    has_customizations: "0",
    combinations: [
      {
        color: {
          id_attribute: "7",
          id_attribute_group: "3",
          attribute: "Beige",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "dFlbGeIJPp5Nf",
        id_combanation: "gWwgTV"
      },
      {
        color: {
          id_attribute: "7",
          id_attribute_group: "3",
          attribute: "Beige",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "spd7N9HT7bMuI",
        id_combanation: "JLx77E"
      },
      {
        color: {
          id_attribute: "7",
          id_attribute_group: "3",
          attribute: "Beige",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "kxalOJLx55Lz1",
        id_combanation: "LLZVhz"
      },
      {
        color: {
          id_attribute: "24",
          id_attribute_group: "3",
          attribute: "Pink",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "qKpW8NTDsTCK6",
        id_combanation: "MnV2DE"
      },
      {
        color: {
          id_attribute: "24",
          id_attribute_group: "3",
          attribute: "Pink",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "MDaQKNCrdRTgI",
        id_combanation: "3X2VGy"
      },
      {
        color: {
          id_attribute: "24",
          id_attribute_group: "3",
          attribute: "Pink",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "2ZJsb1lFWZfy1",
        id_combanation: "m920cL"
      }
    ],
    barcode: "h0BnS3OX7xxnQ"
  },
  {
    id_product: "3",
    has_combinations: "1",
    reference: "demo_3",
    name: "Printed Dress",
    link_rewrite: "printed-dress",
    stock: "1497",
    idShop: "1",
    id_product_attribute: "14",
    attributes: [
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "13",
        id_attribute_group: "3",
        attribute: "Orange",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      }
    ],
    price: 26,
    image_url: "https://api.rockpos.com/8-small_default/printed-dress.jpg",
    short_name: "Printed Dress",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 2,
        name: "File",
        required: false,
        type: "file"
      }
    ],
    combinations: [
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "ZIgzCJeMn6LC5",
        id_combanation: "1MlN1k"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "3f4FTgAZyMKmJ",
        id_combanation: "MdZr4O"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "NSGVadXpuyuw0",
        id_combanation: "W6M5qA"
      }
    ],
    barcode: "5W7lblqQxcBlA"
  },
  {
    id_product: "6",
    has_combinations: "1",
    reference: "demo_6",
    name: "Printed Summer Dress",
    link_rewrite: "printed-summer-dress",
    stock: "2392",
    idShop: "1",
    id_product_attribute: "32",
    attributes: [
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "16",
        id_attribute_group: "3",
        attribute: "Yellow",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "8",
        id_attribute_group: "3",
        attribute: "White",
        group: "Color"
      }
    ],
    price: 30.5,
    image_url:
      "https://api.rockpos.com/16-small_default/printed-summer-dress.jpg",
    short_name: "Printed Su...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 1,
        name: "Weight",
        required: false,
        type: "string"
      }
    ],
    combinations: [
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "sNP0xqez9PxEG",
        id_combanation: "HO0SMa"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "5IGw2Ci6Cc37Z",
        id_combanation: "R3XeJO"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "R9r9o5MrIoGUx",
        id_combanation: "R4yCbJ"
      },
      {
        color: {
          id_attribute: "8",
          id_attribute_group: "3",
          attribute: "White",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "B9c7EM6r9SGH2",
        id_combanation: "S4KTyt"
      },
      {
        color: {
          id_attribute: "8",
          id_attribute_group: "3",
          attribute: "White",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "nPKL1zv4y0ckd",
        id_combanation: "SzNvWs"
      },
      {
        color: {
          id_attribute: "8",
          id_attribute_group: "3",
          attribute: "White",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "OJJ3KEFt4tp5T",
        id_combanation: "5yJy8r"
      }
    ],
    barcode: "BLzglG6TGnSUq"
  },
  {
    id_product: "5",
    has_combinations: "1",
    reference: "demo_5",
    name: "Printed Summer Dress",
    link_rewrite: "printed-summer-dress",
    stock: "3594",
    idShop: "1",
    id_product_attribute: "20",
    attributes: [
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      },
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "14",
        id_attribute_group: "3",
        attribute: "Blue",
        group: "Color"
      },
      {
        id_attribute: "13",
        id_attribute_group: "3",
        attribute: "Orange",
        group: "Color"
      },
      {
        id_attribute: "11",
        id_attribute_group: "3",
        attribute: "Black",
        group: "Color"
      },
      {
        id_attribute: "16",
        id_attribute_group: "3",
        attribute: "Yellow",
        group: "Color"
      }
    ],
    price: 28.98,
    image_url:
      "https://api.rockpos.com/12-small_default/printed-summer-dress.jpg",
    short_name: "Printed Su...",
    has_customizations: "0",
    combinations: [
      {
        color: {
          id_attribute: "14",
          id_attribute_group: "3",
          attribute: "Blue",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "vMcWLgMRMthA9",
        id_combanation: "69ecH8"
      },
      {
        color: {
          id_attribute: "14",
          id_attribute_group: "3",
          attribute: "Blue",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "APIPkF3Br1nW7",
        id_combanation: "mZqQZ0"
      },
      {
        color: {
          id_attribute: "14",
          id_attribute_group: "3",
          attribute: "Blue",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "2riCliBLhLkiD",
        id_combanation: "ItzbB7"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "EzaVTMwxGU6R3",
        id_combanation: "MGWKhS"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "6msDsCfKPo4Gn",
        id_combanation: "v0IKdW"
      },
      {
        color: {
          id_attribute: "13",
          id_attribute_group: "3",
          attribute: "Orange",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "4qEKKTTU02Tdy",
        id_combanation: "TlIrpW"
      },
      {
        color: {
          id_attribute: "11",
          id_attribute_group: "3",
          attribute: "Black",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "Wx2V0pZJWqEML",
        id_combanation: "fTT1By"
      },
      {
        color: {
          id_attribute: "11",
          id_attribute_group: "3",
          attribute: "Black",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "rRtANlIVAAT6g",
        id_combanation: "xxyJyV"
      },
      {
        color: {
          id_attribute: "11",
          id_attribute_group: "3",
          attribute: "Black",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "6AJlJxUZQrL3n",
        id_combanation: "iHEHNK"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "hgp3AK7QMTr3a",
        id_combanation: "iMuBb8"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "lE4Em5p8gkIJt",
        id_combanation: "MOTe0C"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "HwVBkOvCrFbRO",
        id_combanation: "gwG8gm"
      }
    ],
    barcode: "VVKDmIpkAOhkg"
  },
  {
    id_product: "20",
    has_combinations: "1",
    reference: "demo_17",
    name: "Stunning lace midi dress",
    link_rewrite: "stunning-lace-midi-dress",
    stock: "1000",
    idShop: "1",
    id_product_attribute: "74",
    attributes: [
      {
        id_attribute: "2",
        id_attribute_group: "1",
        attribute: "M",
        group: "Size"
      },
      {
        id_attribute: "16",
        id_attribute_group: "3",
        attribute: "Yellow",
        group: "Color"
      },
      {
        id_attribute: "3",
        id_attribute_group: "1",
        attribute: "L",
        group: "Size"
      },
      {
        id_attribute: "1",
        id_attribute_group: "1",
        attribute: "S",
        group: "Size"
      }
    ],
    price: 30.5,
    image_url:
      "https://api.rockpos.com/49-small_default/stunning-lace-midi-dress.jpg",
    short_name: "Stunning l...",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 1,
        name: "Weight",
        required: false,
        type: "string"
      }
    ],
    combinations: [
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "2",
          id_attribute_group: "1",
          attribute: "M",
          group: "Size"
        },
        barcode: "J95RTBkHPQLJd",
        id_combanation: "aHyBf5"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "3",
          id_attribute_group: "1",
          attribute: "L",
          group: "Size"
        },
        barcode: "QBNQpnEtLP15x",
        id_combanation: "Sfdg3p"
      },
      {
        color: {
          id_attribute: "16",
          id_attribute_group: "3",
          attribute: "Yellow",
          group: "Color"
        },
        size: {
          id_attribute: "1",
          id_attribute_group: "1",
          attribute: "S",
          group: "Size"
        },
        barcode: "RwQZu2wAR72X7",
        id_combanation: "otbqog"
      }
    ],
    barcode: "okMBPNGhREKUX"
  },
  {
    id_product: "21",
    has_combinations: "0",
    reference: "",
    name: "Test",
    link_rewrite: "test",
    stock: "40",
    idShop: "1",
    id_product_attribute: "0",
    attributes: [],
    price: 20,
    image_url: "https://api.rockpos.com/0-small_default/test.jpg",
    short_name: "Test",
    has_customizations: "1",
    customizations: [
      {
        id_customization: 0,
        name: "Height",
        required: true,
        type: "string"
      },
      {
        id_customization: 2,
        name: "File",
        required: false,
        type: "file"
      }
    ],
    barcode: "FhQEZ88wgoUz0"
  }
];

export default allProducts;
