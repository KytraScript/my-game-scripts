const descriptors = {
    'terrible': {
        min: 1, max: 14, excluded: []
    },
    'infernal': {
        min: 5, max: 11, excluded: ['water', 'holy', 'small']
    },
    'berserking': {
        min: 12, max: 18, excluded: ['sleeping', 'small']
    }
};

const monsters = {
    'goblin': {
        regions: ['caves', 'deep forest', 'wasteland'],
        types: ['dark','small']
    },
    'mermaid':{
        regions: ['beach', 'grotto', 'ocean', 'river', 'lake'],
        types: ['water', 'nolegs', 'tail']
    },
    'minotaur':{
        regions: ['wasteland', 'caves', 'river', 'lake'],
        types: ['sleeping', 'armored', 'angry']
    }
};

function generateMonsterSet (level, pRegion, descriptors, monsters){

    let typesToCheck = [];
    let levelCheckedDescriptors = [];
    let descriptionsAndExclusions = [];
    let monstersAndTypes = [];
    let len = 0;
    let result = [];

    for (let key in monsters) {
        if (monsters[key].regions.indexOf(pRegion) >= 0){
            typesToCheck = monsters[key].types.slice();
            typesToCheck.unshift(key);
            monstersAndTypes.push(typesToCheck);
        }
    }

    for (let key in descriptors) {
        if (descriptors[key].min <= level && descriptors[key].max >= level)
        {
            levelCheckedDescriptors = descriptors[key].excluded.slice();
            levelCheckedDescriptors.unshift(key);
            descriptionsAndExclusions.push(levelCheckedDescriptors);
        }
    }

        monstersAndTypes.forEach( elem => {

            len = 0;

            descriptionsAndExclusions.forEach( element => {

                let excluded;

                if (elem.length >= element.length) {
                    len = elem.length;
                }

                else {
                    len = element.length;
                }

                for (let i = 1; i < len; i++) {

                    if (element.indexOf(elem[i]) >= 0) {
                        excluded = true;
                    }
                }

                if (!excluded) {
                    result.push([element[0], elem[0]]);
                }
            });
        });
    return result;
}

function generateMonster(){
    let group = generateMonsterSet(8,'caves', descriptors, monsters);
    let encounter = group[Math.floor(Math.random()*group.length)];

    return encounter;
}

console.log(generateMonsterSet(8,'caves', descriptors, monsters));
console.log(generateMonster());

