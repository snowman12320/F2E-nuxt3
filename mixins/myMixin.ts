export default {
  data() {
    return {
    };
  },
  created() {
    console.log("Mixin hook called");
  },
  methods: {
    mixinMethod() {
      console.log("This is a mixin method");
    },
  },
};
