import {useRef,useState,useEffect} from  'react';
import { useGLTF,useAnimations } from "@react-three/drei";
import { useAITeacher } from "@/hooks/useAITeacher";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const vel = 0.1;

const Avatar3 = ({animationIndex,changeAnimation, ...props}) =>{
    const group = useRef();   
    const [increment,setIncrement] = useState(true); 
    const [count,setCount] = useState(0);
    const  [animaciones,setAnimaciones] = useState([]);
    const {nodes,scene,animations} = useGLTF(`/models/Avatar3.glb`);    
    const {actions,names} = useAnimations(animations,group);    
    const currentMessage = useAITeacher((state) => state.currentMessage);
    const loading = useAITeacher((state) => state.loading);

    const lerpMorphTarget = (target,value,speed=0.01)=>{
      scene.traverse((child) => {
          if(child.isSkinnedMesh && child.morphTargetDictionary){
              const index =child.morphTargetDictionary[target];
              if(
                  index === undefined ||
                  child.morphTargetInfluences[index] === undefined
              ){
                  return;
              }
              child.morphTargetInfluences[index] = MathUtils.lerp(
                  child.morphTargetInfluences[index],
                  value,
                  speed
              );
          }
      });
    };

    useFrame(() =>{
      for(let i = 0;i<=21; i++){
          lerpMorphTarget(i,0,0.1);//reset morph targets
      }
      if(currentMessage && currentMessage.visemes && currentMessage.audioPlayer){
          for(let i = currentMessage.visemes.length - 1;i>=0;i--){
              const viseme = currentMessage.visemes[i];
              if(currentMessage.audioPlayer.currentTime * 1000 >= viseme[0]){
                  lerpMorphTarget(viseme[1],1,0.2);
                  break;
              };
          };
      }
    });

    useFrame(() => {        
        if(animationIndex === 3 || animationIndex === 1){
            let aux = count;
            if(increment){
                if(count<1){
                    aux = count+vel;
                }else{
                    setIncrement(false);
                }
            }else{                
                if(count>0){
                    aux = count-vel;
                }else{
                    setIncrement(true);
                }
            }
            setCount(aux);
            //console.log("count",count);
            nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["mouthOpen"]]=count;
        }else{
            nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["mouthOpen"]]=0;
        }
    });
    
    useEffect(() => {
      setAnimaciones(names);
    }, [names]);

    useEffect(() => {
      if (names.length > 0 && animationIndex >= 0 && animationIndex < names.length) {
          actions[names[animationIndex]].reset().fadeIn(0.5).play();
          return () => {
              actions[names[animationIndex]].fadeOut(0.5);
          };
      }
    }, [animationIndex, actions, names]);

    useEffect(() => {
        if (loading) {
            changeAnimation(4);
          //console.log("pensando");
        } else if (currentMessage) {
            changeAnimation(3);
          //console.log("hablar")
          //setAnimation(randInt(0, 1) ? "Talking" : "Talking2");
        } /*else {
            console.log("nose");
          //setAnimation("Idle");
        }*/
    }, [currentMessage, loading]);

    useEffect(() => {
        if (!currentMessage && !loading) {
            changeAnimation(4);
            //console.log("Terminó de hablar");
        }
    }, [currentMessage, loading]);

    /*useEffect(() => {
      const waitingIndex = names.indexOf("WAITING");
      if (waitingIndex !== -1) {
          changeAnimation(waitingIndex);
      }
    }, [names, changeAnimation]);*/

    useEffect(() => {
      actions[names[animationIndex]].reset().fadeIn(0.5).play();
      //console.log("nodes.Wolf3D_Head.morphTargetDictionary",nodes.Wolf3D_Head.morphTargetDictionary);
      //nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["mouthOpen"]]=1;
      return () => {
          actions[names[animationIndex]].fadeOut(0.5);
      };        
    }, [animationIndex, actions, names]);

    useEffect(()=>{
      let timer;
      if (animationIndex === 3) {
        timer = setInterval(() => {          
          let aux = nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["mouthOpen"]];
          nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["mouthOpen"]]=aux===1?0:1;
        }, 250); // Actualiza el contador cada segundo (1000 ms)
      } else {
        clearInterval(timer);
        nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["mouthOpen"]]=0;
      }
      return () => clearInterval(timer);
    },[animationIndex]);
    
    //console.log(names);


    return  (
        <group ref={group} {...props}>
            <primitive object={scene}/>
        </group>
    );
};
export default Avatar3;

useGLTF.preload(`/models/Avatar3.glb`);
