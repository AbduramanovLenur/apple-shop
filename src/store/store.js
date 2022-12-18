import { createStore } from 'vuex';
import router from '../router/router.js';
import { auth } from '../firebase/index.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default createStore({
  state: () => ({
    caseArray: [],
    headphonesArray: [],
    wHeadphonesArray: [],
    favouritesItems: [],
    basketItems: [],
    isActiveClassBurger: false,
    isAuth: false,
    isAuthModal: false,
    totalCost: 0,
    user: null,
    isActiveModalOrder: false,
    orderArray: []
  }),
  getters: {
    getCaseArray(state) {
      return state.caseArray;
    },
    getHeadphonesArray(state) {
      return state.headphonesArray;
    },
    getWHeadphonesArray(state) {
      return state.wHeadphonesArray;
    },
    getIsActiveClassBurger(state) {
      return state.isActiveClassBurger;
    },
    getFavouritesItems(state) {
      return state.favouritesItems;
    },
    getBasketItems(state) {
      return state.basketItems;
    },
    getAuthModal(state) {
      return state.isAuthModal;
    },
    getAuth(state) {
      return state.isAuth;
    },
    getTotalCost(state) {
      return state.totalCost;
    },
    getIsActiveModalOrder(state) {
      return state.isActiveModalOrder;
    },
    getUser(state) {
      return state.user;
    },
    getOrderArray(state) {
      return state.orderArray;
    }
  },
  mutations: {
    setCaseArray(state, caseArray) {
      state.caseArray = caseArray;
    },
    setHeadphonesArray(state, headphonesArray) {
      state.headphonesArray = headphonesArray;
    },
    setWHeadphonesArray(state, wHeadphonesArray) {
      state.wHeadphonesArray = wHeadphonesArray;
    },
    setIsActiveClassBurger(state, isActiveClassBurger) {
      state.isActiveClassBurger = isActiveClassBurger;
    },
    setCartToFaourites(state, cart) {
      if (state.favouritesItems.length) {
        let isProductExist = false;
        state.favouritesItems.forEach(item => {
          if (item.id === cart.id) {
            isProductExist = true;
          }
        });

        if (!isProductExist) {
          state.favouritesItems.push(cart);
        }
      } else {
        state.favouritesItems.push(cart);
      }
    },
    setIsActiveClassFavourites(state, id) {
      state.favouritesItems.forEach(cart => {
        if (cart.id === id) {
          if (!cart.isFavourite) {
            cart.isFavourite = true;
          } else {
            cart.isFavourite = false;
          }
        }
      });
    },
    setCartToBasketArray(state, cart) {
      if (state.basketItems.length) {
        let isProductExist = false;
        state.basketItems.forEach(item => {
          if (item.id === cart.id) {
            isProductExist = true;
          }
        });

        if (!isProductExist) {
          state.basketItems.push(cart);
        }
      } else {
        state.basketItems.push(cart);
      }
    },
    setIcrementQuantity(state, index) {
      state.basketItems[index].quantity++;
      state.basketItems[index].priceBasket = state.basketItems[index].price * state.basketItems[index].quantity;
    },
    setDicrementQuantity(state, index) {
      if (state.basketItems[index].quantity > 1) {
        state.basketItems[index].quantity--;
        state.basketItems[index].priceBasket = state.basketItems[index].price * state.basketItems[index].quantity;
      }
    },
    removeCartBasket(state, index) {
      state.basketItems[index].isBasketActive = false;
      state.basketItems.splice(index, 1);
    },
    setIsActiveClassBasket(state, id) {
      state.headphonesArray.forEach(cart => {
        if (cart.id === id) {
          cart.isBasketActive = true;
          return;
        }
      });
      state.wHeadphonesArray.forEach(cart => {
        if (cart.id === id) {
          cart.isBasketActive = true;
          return;
        }
      });
    },
    removeCartFavourites(state, id) {
      state.favouritesItems.forEach((elem, index, array) => {
        if (elem.id === id && elem.isFavourite === false) {
          array.splice(index, 1);
        }
      });
    },
    setTotalCost(state, cost) {
      state.totalCost = cost;
    },
    setUser(state, { user, bool }) {
      state.user = user;
      state.isAuth = bool;
    },
    clearUser(state, bool) {
      state.user = null;
      state.isAuth = bool;
    },
    clearBasketItems(state) {
      state.basketItems = [];
    },
    setIsActiveModalOrder(state) {
      state.isActiveModalOrder = true;
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        state.isActiveModalOrder = false;
        document.body.style.overflow = 'auto';
      }, 3000);
    },
    clearIsActiveClassBtnCart(state) {
      state.headphonesArray.forEach(btn => {
        btn.isBasketActive = false;
      });
      state.wHeadphonesArray.forEach(btn => {
        btn.isBasketActive = false;
      });
    },
    setOrderArray(state) {
      state.basketItems.forEach(item => {
        state.orderArray.push({
          nameProduct: item.title,
          amountProduct: item.quantity,
          priceProduct: item.priceBasket
        });
      });
    }
  },
  actions: {
    async fetchFromApi({ commit }, { url, nameSetFunction }) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        commit(nameSetFunction, data);
      } catch (error) {
        console.log(error);
      }
    },
    addIsActiveClassBurger({ state, commit }) {
      if (!state.isActiveClassBurger) {
        commit('setIsActiveClassBurger', true);
      } else {
        commit('setIsActiveClassBurger', false);
      }
    },
    addToCartFavourites({ commit }, cart) {
      commit('setCartToFaourites', cart);
    },
    addIsActiveClassFavourites({ commit }, id) {
      commit('setIsActiveClassFavourites', id);
    },
    addToCartBasket({ commit }, cart) {
      commit('setCartToBasketArray', cart);
    },
    icrementQuantity({ commit }, index) {
      commit('setIcrementQuantity', index);
    },
    decrementQuantity({ commit }, index) {
      commit('setDicrementQuantity', index);
    },
    deleteCartFromBasket({ commit }, index) {
      commit('removeCartBasket', index);
    },
    addIsActiveClassBasket({ commit }, id) {
      commit('setIsActiveClassBasket', id);
    },
    deleteCartFavourites({ commit }, id) {
      commit('removeCartFavourites', id);
    },
    addTotalCost({ commit }, cost) {
      commit('setTotalCost', cost);
    },
    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found');
            break;
          case 'auth/wrong-password':
            alert('Wrond password');
            break;
          default:
            alert("Something went wrong");
        }

        return;
      }

      commit('setUser', { user: auth.currentUser, bool: true });
      router.push('/');
    },
    async register({ commit }, details) {
      const { email, password, newPassword } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use');
            break;
          case 'auth/invalid-email':
            alert('Invalid email');
            break;
          case 'auth/operation-not-allowed':
            alert('Operation not allowed');
            break;
          case 'auth/weak-password':
            alert('Weak password');
            break;
          default:
            alert("Something went wrong");
        }

        return;
      }

      commit('setUser', auth.currentUser);
      router.push('/');
    },
    async logout({ commit }) {
      await signOut(auth);

      commit('clearUser', false);

      router.push('/auth');
    },
    clearBasket({ commit }) {
      commit('clearBasketItems');
    },
    addIsActiveModalOrder({ commit }) {
      commit('setIsActiveModalOrder');
    },
    clearIsActiveBtnCart({ commit }) {
      commit('clearIsActiveClassBtnCart');
    },
    addOrderArray({ commit }) {
      commit('setOrderArray');
    }
  }
})
