new Vue({
  el: '#app',
  data: {
    title: 'Legend Of Solo',
    palette_colors: ['#52006A', '#CD113B', '#FF7600', '#FFA900'],
    heros: {
      left: {
        avatar: './image/hero_two.png',
        hp: 100,
        mana: 0
      },
      right: {
        avatar: './image/hero_one.png',
        hp: 100,
        mana: 0
      }
    },
    width_life: 300,
    in_game: false,
    in_action: 0,
    hero_win: null,
    last_hist_dame_bonus: 5,
    mana_bonus: 5

  },
  watch: {
    hero_win: function() {
      alert('Hahahah !')
      this.in_game = false;
    }
  },
  computed: {
    wordsOfTitle: function() {
      return this.title.toUpperCase().split('')
    },
    avatarHeroLeft: function() {
      return this.heros.left.avatar;
    },
    avatarHeroRight: function() {
      return this.heros.right.avatar;
    },
    inAction: function() {
      return this.in_action === 0 ? 'Hero Left' : 'Hero Right';
    },
    activeHeroLeft: function() {
      return this.in_game && this.in_action === 0;
    },
    activeHeroRight: function() {
      return this.in_game && this.in_action === 1;
    }
  },
  methods: {
    randomColor: function() {
      let random_index = this.randomNumber(this.palette_colors.length);
      return this.palette_colors[random_index];
    },
    randomNumber: function(size = 1) {
      return Math.floor(Math.random() * size)
    },
    attack: function() {
      let radom_damge = this.randomNumber(10);
      let target = this.targetHero();
      let new_hp = target.hp - radom_damge;
      let new_mana = target.mana + radom_damge * this.mana_bonus;
      // set new hp to hero
      this.setHp(target, new_hp);
      this.setMana(target, new_mana);
      
    },
    healing: function() {
      let random_heal = this.randomNumber(10);
      let target = this.inActionHero();
      let new_hp = target.hp + random_heal;
      let new_mana = target.mana - 50;

      // set new hp to hero
      this.setHp(target, new_hp);
      this.setMana(target, new_mana);

    },
    lastHist: function() {
      let radom_damge = this.randomNumber(10);
      let target = this.targetHero();
      let current = this.inActionHero();
      let new_hp = target.hp - radom_damge * this.last_hist_dame_bonus;
      // set new hp to hero
      this.setHp(target, new_hp);
      this.resetMana(current);
    },
    inActionHero: function() {
      if(this.in_action === 0) {
        return this.heros.left;
      }
      return this.heros.right;
    },
    targetHero: function() {
      if(this.in_action === 0) {
        return this.heros.right;
      }
      return this.heros.left;
    },
    setHp: function(target, hp) {
      if(hp <= 0) {
        target.hp = 0;
        this.hero_win = this.in_action;
      
      }else if(hp >= 100) {
        target.hp = 100;
      }
      else {
        target.hp = hp;
      }
      this.in_action = this.in_action === 0 ? 1 : 0;
    },
    setMana: function(target, mana) {
      if(mana >= 100) {
        target.mana = 100;
      }
      else {
        target.mana = mana;
      }
    },
    resetMana: function(target) {
      target.mana = 0;
    }
    
  }
})