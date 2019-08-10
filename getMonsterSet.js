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



    let typesToCheck = [];  //initialized to an empty array

    let levelCheckedDescriptors = [];   

    let descriptionsAndExclusions = [];     

    let monstersAndTypes = [];  

    let len = 0;

    let result = [];            



    for (let key in monsters) {                            //first time through the loop, key = 'goblin' | second time through, key = 'mermaid' | etc.

        if (monsters[key].regions.indexOf(pRegion) >= 0){  //while key = 'goblin' searches the regions property of 'goblin' index by index for a match to pRegion

            typesToCheck = monsters[key].types.slice();    //set the empty typesToCheck array to be a copy of the types array associated with 'goblin'

            typesToCheck.unshift(key);                     //sets index 0 of the new typesToCheck array to be the name of the monster ('goblin') and shifts the types over one index

            monstersAndTypes.push(typesToCheck);           //pushes the new typesToCheck array to the monstersAndTypes array for use outside of this (for(in)) loop

        }                                             // console.log(monstersAndTypes); // ['goblin', 'dark', 'small']

    }



    for (let key in descriptors) {

        if (descriptors[key].min <= level && descriptors[key].max >= level){

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

    console.log(result);  //[[ 'terrible', 'goblin' ], [ 'terrible', 'minotaur' ], [ 'infernal', 'minotaur' ]]

    return result;

    

}



function generateMonster(){

    let group = generateMonsterSet(8,'caves', descriptors, monsters);

    let encounter = group[Math.floor(Math.random()*group.length)];



    return encounter;

    //[random tuple from the group array]

}



console.log(generateMonster());

//probably looks like this: ['infernal', 'minotaur']
