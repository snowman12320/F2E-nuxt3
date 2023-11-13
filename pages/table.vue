<template>
  <table>
    <tr v-for="(rowData, index) in tableData" :key="index">
      <td v-for="detailsForDate in rowData" :key="detailsForDate[0].id">
        <ul>
          <li v-for="detail in detailsForDate" :key="detail.id">
            {{ detail.result_date }} - {{ detail.result }}
          </li>
        </ul>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          classes_name: "建築與設施",
          sort: 1,
          classes: [
            {
              id: 4,
              classes_name: "作業場所地面保持清潔，無積水及塵土飛揚。",
              sort: 1,
            },
            {
              id: 5,
              classes_name: "排水系統暢通無異味，水溝出口處之截油槽及柵欄完整無破損。",
              sort: 2,
            },
            {
              id: 6,
              classes_name: "牆壁、支柱保持清潔、無汙垢、侵蝕等現象。",
              sort: 3,
            },
            {
              id: 7,
              classes_name: "天花板清潔無長黴、成片剝落、積塵及納垢等情形。",
              sort: 4,
            },
            {
              id: 8,
              classes_name: "作業區不堆積與生產無關之物品。",
              sort: 5,
            },
            {
              id: 9,
              classes_name: "作業區通風良好，無不良氣味,抽風機、通風口清潔 無積塵。",
              sort: 6,
            },
            {
              id: 10,
              classes_name: "照明設備充足，廚房內水電配管清潔無積塵。",
              sort: 7,
            },
            {
              id: 11,
              classes_name: "更衣室、辦公室派專人清掃，保持清潔。",
              sort: 8,
            },
            {
              id: 12,
              classes_name:
                "冷凍、冷藏、乾料庫之地面保持乾淨，貨品存放離地離牆，置於層架或墊底籃上。",
              sort: 9,
            },
            {
              id: 13,
              classes_name: "洗碗區、販賣場所每餐供膳後立即清掃並保持檯面與地面之清潔。",
              sort: 10,
            },
            {
              id: 14,
              classes_name:
                "作業場所之出入口、門窗、通風口、空氣簾、紗窗等防止病沒設施清潔完善。",
              sort: 11,
            },
            {
              id: 15,
              classes_name:
                "泡鞋池適時更換、加氯水，洗手設備完整，洗手乳、擦手紙、酒精充足供應。",
              sort: 12,
            },
          ],
        },
      ],
      details: [
        {
          id: 5663,
          ghp_id: 26,
          ghp_class_id: 1,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 5670,
          ghp_id: 26,
          ghp_class_id: 2,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 5677,
          ghp_id: 26,
          ghp_class_id: 3,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 199,
          ghp_id: 26,
          ghp_class_id: 4,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 200,
          ghp_id: 26,
          ghp_class_id: 5,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 201,
          ghp_id: 26,
          ghp_class_id: 6,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 202,
          ghp_id: 26,
          ghp_class_id: 7,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 203,
          ghp_id: 26,
          ghp_class_id: 8,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 204,
          ghp_id: 26,
          ghp_class_id: 9,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 205,
          ghp_id: 26,
          ghp_class_id: 10,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 206,
          ghp_id: 26,
          ghp_class_id: 11,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 207,
          ghp_id: 26,
          ghp_class_id: 12,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 208,
          ghp_id: 26,
          ghp_class_id: 13,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 209,
          ghp_id: 26,
          ghp_class_id: 14,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 210,
          ghp_id: 26,
          ghp_class_id: 15,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 211,
          ghp_id: 26,
          ghp_class_id: 16,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 212,
          ghp_id: 26,
          ghp_class_id: 17,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 213,
          ghp_id: 26,
          ghp_class_id: 18,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 214,
          ghp_id: 26,
          ghp_class_id: 19,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 215,
          ghp_id: 26,
          ghp_class_id: 20,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 216,
          ghp_id: 26,
          ghp_class_id: 21,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 217,
          ghp_id: 26,
          ghp_class_id: 22,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 218,
          ghp_id: 26,
          ghp_class_id: 23,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 219,
          ghp_id: 26,
          ghp_class_id: 24,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 220,
          ghp_id: 26,
          ghp_class_id: 25,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 221,
          ghp_id: 26,
          ghp_class_id: 26,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 222,
          ghp_id: 26,
          ghp_class_id: 27,
          result_date: "2023-10-30",
          result: null,
        },
        {
          id: 5664,
          ghp_id: 26,
          ghp_class_id: 1,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 5671,
          ghp_id: 26,
          ghp_class_id: 2,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 5678,
          ghp_id: 26,
          ghp_class_id: 3,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 223,
          ghp_id: 26,
          ghp_class_id: 4,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 224,
          ghp_id: 26,
          ghp_class_id: 5,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 225,
          ghp_id: 26,
          ghp_class_id: 6,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 226,
          ghp_id: 26,
          ghp_class_id: 7,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 227,
          ghp_id: 26,
          ghp_class_id: 8,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 228,
          ghp_id: 26,
          ghp_class_id: 9,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 229,
          ghp_id: 26,
          ghp_class_id: 10,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 230,
          ghp_id: 26,
          ghp_class_id: 11,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 231,
          ghp_id: 26,
          ghp_class_id: 12,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 232,
          ghp_id: 26,
          ghp_class_id: 13,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 233,
          ghp_id: 26,
          ghp_class_id: 14,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 234,
          ghp_id: 26,
          ghp_class_id: 15,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 235,
          ghp_id: 26,
          ghp_class_id: 16,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 236,
          ghp_id: 26,
          ghp_class_id: 17,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 237,
          ghp_id: 26,
          ghp_class_id: 18,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 238,
          ghp_id: 26,
          ghp_class_id: 19,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 239,
          ghp_id: 26,
          ghp_class_id: 20,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 240,
          ghp_id: 26,
          ghp_class_id: 21,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 241,
          ghp_id: 26,
          ghp_class_id: 22,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 242,
          ghp_id: 26,
          ghp_class_id: 23,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 243,
          ghp_id: 26,
          ghp_class_id: 24,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 244,
          ghp_id: 26,
          ghp_class_id: 25,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 245,
          ghp_id: 26,
          ghp_class_id: 26,
          result_date: "2023-10-31",
          result: null,
        },
        {
          id: 246,
          ghp_id: 26,
          ghp_class_id: 27,
          result_date: "2023-10-31",
          result: null,
        },
      ],
      dates: ["2023-10-30", "2023-10-31"],
    };
  },
  computed: {
    tableData() {
      const tableData = [];
      const itemsLength = this.items[0].classes.length;
      const datesLength = this.dates.length;

      for (let i = 0; i < itemsLength; i++) {
        const rowData = [];
        for (let j = 0; j < datesLength; j++) {
          const startIndex = j + 24;
          const detailsForDate = this.details.slice(startIndex, startIndex + 24);
          rowData.push(detailsForDate);
        }
        tableData.push(rowData);
      }
      return tableData;
    },
  },
};
</script>
