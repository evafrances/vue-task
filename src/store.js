import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  //primero hacemos las actions
  //con commit lo relacionamos con las mutations
  state: {
    tareas: [],
    tarea: {name:'', id:''}
  },
  mutations: {
    setTareas(state, tareas){
      state.tareas = tareas
    },
    setTarea(state, tarea){
      state.tarea = tarea
    },
    eliminarTarea(state,id){
      state.tareas = state.tareas.filter(doc=>{
        return doc.id != id
      })
    }
  },
  actions: {
    getTareas({commit}){
      const tareas = []
      db.collection('tareas').get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          console.log(doc.id);
          console.log(doc.data());
          let tarea = doc.data();
          tarea.id = doc.id
          tareas.push(tarea)
        })
      })

      commit('setTareas', tareas)
    },
    getTarea({commit}, id){
      db.collection('tareas').doc(id).get()
      .then(doc => {
        // console.log(doc.data())
        // console.log(doc.id)
        let tarea = doc.data();
        tarea.id = doc.id;
        commit('setTarea', tarea)
      })
    },
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        name: tarea.name
      })
      .then(() =>{
        router.push({name: 'inicio'})
      })
    },
    agregarTarea({commit}, name){
      db.collection('tareas').add({
        name: name
      })
      .then(() =>{
        console.log(doc.id)
      })
    },
    eliminarTarea({commit, dispatch}, id){
      db.collection('tareas').doc(id).delete()
      .then(()=>{
        console.log('Tarea fue eliminada');
        //dispatch('getTarea')
        commit('eliminarTarea', id)
      })
    }
  }
})
