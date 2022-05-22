import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  images = [
    {
      title: "Title 01",
      imageUrl: "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 02",
      imageUrl: "https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 03",
      imageUrl: "https://images.unsplash.com/photo-1532015917327-c7c46aa1d930?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 04",
      imageUrl: "https://images.unsplash.com/photo-1505850557988-b858c0aec076?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 05",
      imageUrl: "https://images.unsplash.com/photo-1487252168646-fa0e87f6e83c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 06",
      imageUrl: "https://media.istockphoto.com/photos/portrait-of-an-young-woman-fishing-while-camping-next-to-beautiful-picture-id1306308972?k=20&m=1306308972&s=612x612&w=0&h=SMSzqB0icUnO0RjGnkxFCCBu7QTC6TWwcS_9kE45jSU=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 07",
      imageUrl: "https://images.unsplash.com/photo-1545450660-3378a7f3a364?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },    
    {
      title: "Title 08",
      imageUrl: "https://images.unsplash.com/photo-1493787039806-2edcbe808750?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 09",
      imageUrl: "https://images.unsplash.com/photo-1485452499676-62ab02c20e83?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 10",
      imageUrl: "https://media.istockphoto.com/photos/portrait-of-young-handsome-man-making-himself-herbal-tea-while-in-picture-id1305189938?k=20&m=1305189938&s=612x612&w=0&h=O44UTE7LdiLJBQJXcebK9l487DqLVgTGzFlHxG6O9ys=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 11",
      imageUrl: "https://media.istockphoto.com/photos/lodge-boy-and-wild-boy-picture-id1136009749?k=20&m=1136009749&s=612x612&w=0&h=MPC74THv6SGoNMX29tnWC-2C5ZAYdvAXzk7VGLbtV3k=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, 
    {
      title: "Title 12",
      imageUrl: "https://media.istockphoto.com/photos/view-of-the-beautiful-pang-ung-lake-camping-in-the-misty-on-the-water-picture-id1326013446?k=20&m=1326013446&s=612x612&w=0&h=TxtFRUyrWQn3UnPZD4uikQfBKfvVSfydnqevKhFvx_E=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 13",
      imageUrl: "https://media.istockphoto.com/photos/sweet-young-couple-is-sitting-next-to-the-campfire-and-chatting-picture-id1274271979?k=20&m=1274271979&s=612x612&w=0&h=L2_AN0BFePbD85RXv5feCeedccB86MOYlN86XvXz6L4=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, 
   {
      title: "Title 14",
      imageUrl: "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 15",
      imageUrl: "https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 16",
      imageUrl: "https://images.unsplash.com/photo-1532015917327-c7c46aa1d930?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 17",
      imageUrl: "https://images.unsplash.com/photo-1505850557988-b858c0aec076?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 18",
      imageUrl: "https://images.unsplash.com/photo-1487252168646-fa0e87f6e83c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 19",
      imageUrl: "https://media.istockphoto.com/photos/portrait-of-an-young-woman-fishing-while-camping-next-to-beautiful-picture-id1306308972?k=20&m=1306308972&s=612x612&w=0&h=SMSzqB0icUnO0RjGnkxFCCBu7QTC6TWwcS_9kE45jSU=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 20",
      imageUrl: "https://images.unsplash.com/photo-1545450660-3378a7f3a364?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },    
    {
      title: "Title 21",
      imageUrl: "https://images.unsplash.com/photo-1493787039806-2edcbe808750?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 22",
      imageUrl: "https://images.unsplash.com/photo-1485452499676-62ab02c20e83?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 23",
      imageUrl: "https://media.istockphoto.com/photos/portrait-of-young-handsome-man-making-himself-herbal-tea-while-in-picture-id1305189938?k=20&m=1305189938&s=612x612&w=0&h=O44UTE7LdiLJBQJXcebK9l487DqLVgTGzFlHxG6O9ys=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 24",
      imageUrl: "https://media.istockphoto.com/photos/lodge-boy-and-wild-boy-picture-id1136009749?k=20&m=1136009749&s=612x612&w=0&h=MPC74THv6SGoNMX29tnWC-2C5ZAYdvAXzk7VGLbtV3k=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, 
    {
      title: "Title 25",
      imageUrl: "https://media.istockphoto.com/photos/view-of-the-beautiful-pang-ung-lake-camping-in-the-misty-on-the-water-picture-id1326013446?k=20&m=1326013446&s=612x612&w=0&h=TxtFRUyrWQn3UnPZD4uikQfBKfvVSfydnqevKhFvx_E=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      title: "Title 26",
      imageUrl: "https://media.istockphoto.com/photos/sweet-young-couple-is-sitting-next-to-the-campfire-and-chatting-picture-id1274271979?k=20&m=1274271979&s=612x612&w=0&h=L2_AN0BFePbD85RXv5feCeedccB86MOYlN86XvXz6L4=",
      imageDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },      
  ];
  currentPage = 7;

  constructor() { }

  ngOnInit(): void {
  }

  getDisplay(i:number) {
    if (i-this.currentPage>4 || this.currentPage-i>4) {
      return "none";
    } else if (i<10) {
      return "inline-block"
    }  
    else {
      return "inline-block";
    }
  }

  updateCurrentPage(i:number) {
    console.log(i);
    this.currentPage = i;
  }

}
