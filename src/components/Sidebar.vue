<template>
  <div v-if="isOpen" class="shadow"></div>
  <div v-if="isOpen" class="sidebar">
    <ul>
      <li class="sidebar-item" v-for="cat of cats" :key="cat.id">
        <a class="cat-link" :href="cat.url">
          {{ cat.name }}
          <button
            class="sub-btn"
            @click.stop="openSub(cat.id)"
            v-if="openedSub !== cat.id"
          >
            +
          </button>
          <button
            class="sub-btn"
            @click.stop="closeSub"
            v-if="openedSub === cat.id"
          >
            -
          </button>
        </a>
        <ul class="sub-list" :id="cat.id" v-if="openedSub === cat.id">
          <li v-for="item in cat.items" :key="item.id">{{ item.name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      openedSub: null,
      cats: [
        {
          id: 1,
          name: "Apple Watch",
          url: "#",
          items: [{ id: 1.1, name: "AppleWatch" }],
        },
        {
          id: 2,
          name: "Посуда",
          url: "#",
          items: [
            { id: 2.1, name: "Balcon du Guadalquivir", url: "#" },
            { id: 2.2, name: "H Deco", url: "#" },
            { id: 2.3, name: "Cheval d’Orient", url: "#" },
            { id: 2.4, name: "Carnets d’Equateurs", url: "#" },
            { id: 2.5, name: "Voyage en Ikat", url: "#" },
            { id: 2.6, name: "Mosaique au 24", url: "#" },
            { id: 2.7, name: "Bleus d’Ailleurs", url: "#" },
            { id: 2.8, name: "Tie-Set", url: "#" },
            { id: 2.9, name: "A Walk in the Garden", url: "#" },
            { id: 2.1, name: "Attelage", url: "#" },
          ],
        },
        {
          id: 3,
          name: "Сумки",
          url: "#",
          items: [{ id: 3.1, name: "AppleWatch" }],
        },
        {
          id: 4,
          name: "Обувь",
          url: "#",
          items: [{ id: 4.1, name: "AppleWatch" }],
        },
        {
          id: 5,
          name: "Аксессуары",
          url: "#",
          items: [{ id: 5.1, name: "AppleWatch" }],
        },
      ],
    };
  },
  methods: {
    openSub(id) {
      return (this.openedSub = id);
    },
    closeSub() {
      return (this.openedSub = null);
    },
  },
};
</script>

<style lang="css" scoped>
.shadow {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: #000;
  opacity: 0.7;
  left: 0;
  top: 40px;
}
.cat-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar {
  position: fixed;
  background: #fff;
  left: 0;
  top: 40px;
  padding: 100px 40px;
  height: 100vh;
  width: 500px;
  z-index: 3;
}
.sidebar-item {
  margin-bottom: 20px;
}
.sub-btn {
  border: none;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
}
.sub-list {
  margin-top: 20px;
  padding-left: 20px;
  color: #888888;
}

.sub-list li {
  margin: 5px 0;
  font-size: 14px;
}
</style>
