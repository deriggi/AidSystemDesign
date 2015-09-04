var Firebase = require("firebase");

var UIHandler = (function() {

        var myFirebaseRef = new Firebase("https://intense-inferno-4654.firebaseio.com/work");

        return {

            setup: function(){
                console.log("ready to rock")
                
                // every obj has a level, may have a parent level and a parent id

                var tropicsProgramId = UIHandler.pushData({title:"improve ag systems in tropics", startDate:'01/01/2015', endDate:''}, "program");
                console.log(tropicsProgramId);
                UIHandler.pushData({title:"deed", parentlevel:'program', parentid:tropicsProgramId}, "project")
                UIHandler.pushData({title:"avanse", parentlevel:'program', parentid:tropicsProgramId}, "project")

                var govProgramId = UIHandler.pushData({title:"municipal governance asia",startDate:'01/01/1980', endDate:''}, "program");
                console.log(govProgramId);
                UIHandler.pushData({title:"ace", parentlevel:'program', parentid:govProgramId}, "project")
                UIHandler.pushData({title:"rampup", parentlevel:'program', parentid:govProgramId}, "project")
                UIHandler.pushData({title:"shahar", parentlevel:'program', parentid:govProgramId}, "project")

                // UIHandler.getSubProjects('-JyJ-WwwYY64PCXOTTHX');

            },

            readData: function(){
                getSubProjects();
            },

            pushData: function(workObj, level){
                return myFirebaseRef.child(level).push(workObj).key()
            },
            getSubProjects: function(programId){
                ref = myFirebaseRef
                ref.child('project').orderByChild("parentid").startAt(programId).endAt(programId).on("child_added", function(snapshot) {
                    console.log(snapshot.val().title)
                });

            }
            
        }

    })();

UIHandler.setup();
// UIHandler.getSubProjects('-JyJC38LJV27jUH-DX93');
// UIHandler.getSubProjects('-JyJC38itlgAnM7Yyt76');