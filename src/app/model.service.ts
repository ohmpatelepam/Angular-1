import { Injectable,Output, EventEmitter} from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';


export interface obj{
  sourceText:String;
  dateText:String
  authorText:String;
  imageurlText:String ;
  contentText:String;
  descriptionText:String;
}

@Injectable({
  providedIn: 'root'
})

export class ModelService {

  
  private data:Map<String,Array<obj>>;

  // @Output() onChange: EventEmitter<boolean> = new EventEmitter();
  constructor(){
    console.log("service");
    this.data = new Map();
    this.fetchData();
  }

  fetchData = async ()=>{
    
    await fetch('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=d4e03df5989c4e4a998e4fb2fe632d48').then(response => response.json()).then(jsonres => this.set(jsonres)).catch(() => {
        alert("Please reload the page. Unable to fetch data");
    });
    
  } 
  set = (data) => {
    
    data.articles.forEach(element => {
      
      const temp:obj = {
            sourceText:element.source.name,
            dateText:element.publishedAt,
            authorText:element.author,
            imageurlText:element.urlToImage,
            contentText:element.content,
            descriptionText:element.description
      }
      
      if(this.data.has(element.source.name)){
            const arr:Array<obj> = [...this.data.get(element.source.name),temp];
            this.data.set(element.source.name,arr);
      }else{
            this.data.set(element.source.name,[temp]);
        }
      });
     
  }

  getData = () => {
    
    return this.data;
  }
  getFilterData = (obj) => {
   
      console.log("filter data");
      console.log(obj.src);
      if(obj.src === "all"){
        
        return  this.data;
      }
      let tempData = new Map();
      
      const iterator1 = this.data.entries();

      for (let entry of iterator1) {
        if(entry[0] === obj.src){
          tempData.set(obj.src,entry[1]);
          break;
        }
      }
      return tempData; 
  }
  addNews(obj){
    this.data.set(obj.title,[obj]);
  }
  

    
  initializeloader = ()=>{

  }
  
  removeLoader(){

  }
}