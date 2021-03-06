mnemonic = 'match diamond magnet sing bullet enemy two twin gather shuffle prize jeans'

Card = {
  permissions: "public",
  meta: {
    name: "name"
  },
  form: ['*'],
  schema: {
    title: "Identity Profile",
    type: "object",
    properties: {
      name: {
        title: "Name",
        type: "string"
      },
      category: {
        title: "Category",
        type: "string"
      }
    },
    required: [ "name" ]
  },
  children: {}
};

Identity = {
  permissions: "public",
  meta: {
    name: "name",
    age: "age"
  },
  form: ["*"],
  schema: {
    title: "Identity Profile",
    type: "object",
    properties: {
      name: {
        title: "Name",
        type: "string"
      },
      age: {
        title: "Age",
        type: "string"
      }
    },
    required: [ "name" ]
  },
  children: {
    card: Card
  }
};

youbase = YouBase(window.location.href);
wallet = youbase.wallet(mnemonic);
wallet.profiles.definition('identity', Identity).then(function () {
  return wallet.profiles.insert('identity', {name: 'Josh'});
}).then(function (profile) {
  window.profile = profile;
  return profile.children.insert('card', {name: 'Qdoba', category: 'loyalty'});
}).then(function (card) {
  window.card = card;
});


