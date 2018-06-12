$(document).ready(function () {

  let search = $('#search');

  search.click(()=>{

    let imdb_id = $('#imdb_id').val();
    let title = $('#title').val();

    if(($.trim(imdb_id)!='' && $.trim(imdb_id)!=null) && ($.trim(title)!='' && $.trim(title)!=null))
    {
      $.ajax({
       type:'GET',
       dataType:"json",
       url:"https://www.omdbapi.com/?apikey=3549bf05&i="+imdb_id+"&t="+title+"&plot=full",
       success:(data)=>{
         if(data.Response == "True")
         {
           if(data.Type == "movie")
           {
               show_movie(data);
           }
           else if(data.Type == "series")
           {
             show_series(data);
           }

         }
         else
         {

           $('#get_response').html('');

           $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">'+data.Error+'</h6></div></div></div>');

         }

       },
       beforeSend: () => {
         $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">Loading...</h6></div></div></div>');
       },
       error: (data)=>
       {
         console.log(data);
         $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">Something went wrong please refresh the page and try again.</h6></div></div></div>');

       },
       complete:(data)=> {
                         $('html, body').animate({
                             scrollTop: $("#get_response").offset().top
                         }, 2000);
                     },
       timeout:3000

      });
    }
    else if($.trim(imdb_id)!='' && $.trim(imdb_id)!=null)
    {

      $.ajax({
       type:'GET',
       dataType:"json",
       url:"https://www.omdbapi.com/?apikey=3549bf05&i="+imdb_id+"&plot=full",
       success:(data)=>{
         if(data.Response == "True")
         {
           console.log(data);

           if(data.Type == "movie")
           {
               show_movie(data);
           }
           else if(data.Type == "series")
           {
             show_series(data);
           }

         }
         else
         {

           $('#get_response').html('');

           $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">'+data.Error+'</h6></div></div></div>');

         }

       },
       beforeSend: () => {
         $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">Loading...</h6></div></div></div>');
       },
       error: (data)=>
       {
         console.log(data);
         $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">Something went wrong please refresh the page and try again.</h6></div></div></div>');

       },
       complete:(data)=> {
                         $('html, body').animate({
                             scrollTop: $("#get_response").offset().top
                         }, 2000);
                     },
       timeout:3000

      });
    }
    else if($.trim(title)!='' && $.trim(title)!=null)
    {

      $.ajax({
       type:'GET',
       dataType:"json",
       url:"https://www.omdbapi.com/?apikey=3549bf05&t="+title+"&plot=full",
       success:(data)=>{

         if(data.Response == "True")
         {
           console.log(data);

           if(data.Type == "movie")
           {
               show_movie(data);
           }
           else if(data.Type == "series")
           {
             show_series(data);
           }

         }
         else
         {

           $('#get_response').html('');

           $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">'+data.Error+'</h6></div></div></div>');

         }

      },
      beforeSend: () => {
         $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">Loading...</h6></div></div></div>');
       },
       error: (data)=>
       {
         console.log(data);
         $('#get_response').html('<div class="row"><div class="col-md-12"><div class="card"><h6 class="text-center">Something went wrong please refresh the page and try again.</h6></div></div></div>');

       },
       complete:(data)=> {
                         $('html, body').animate({
                             scrollTop: $("#get_response").offset().top
                         }, 2000);
                     },
       timeout:3000

      });
    }
    else
    {
      $('#errors').text("INVALID INPUT");

      setTimeout(()=>{
         $('#errors').text("");
       }, 2000);
    }


    function show_movie(data)
    {
      console.log(data);

      let img = data.Poster;
      let title = data.Title;
      let imdb_id = data.imdbID;
      let imdb_votes = data.imdbVotes;
      let imdb_rating = data.imdbRating;
      let rated = data.Rated;

      let ratings = "";
      for (rating of data.Ratings) {
        ratings += rating.Source;
        ratings += "(<b>"+rating.Value+"</b>)";
        ratings += " | ";
      }

      let genre = data.Genre;
      let date_of_release = data.Released;

      let runtime = data.Runtime;
      let type = data.Type;
      let language = data.Language;
      let country = data.Country;
      let director = data.Director;
      let writer = data.Writer;
      let actors = data.Actors;
      let awards = data.Awards;
      let boxoffice = data.BoxOffice;
      let production = data.Production;
      let website_link = data.Website;

      let website = "";
      if(website_link!="N/A")
      {
        website = '<a href="'+website_link+'" target="blank" class="btn btn-default btn-sm" style="color:white;"> Click here</a>';
      }
      else {
        website = "N/A"
      }



      let plot = data.Plot;

      $('#get_response').html('');

      $('#get_response').html('<div class="row"><div class="col-md-3 col-sm-12"><img src="'+img+'" alt="'+title+'"  class="img img-fluid"></div><div class="col-md-9"><div class="card card-body"><h3><b>'+title+' (<span>IMDB ID : '+imdb_id+'</span> | <span>IMDB Votes : '+imdb_votes+'</span> | <span>IMDB Rating : '+imdb_rating+'</span>)</b></h3><hr style="border: 1px solid #C0C0C0;"><p><b>Rating</b> : '+ratings+' <br> <b>Genre</b> : '+genre+' | <b>Date of release </b> : '+date_of_release+' | <b>Rated </b> : '+rated+' | <b>Type</b> : '+type+' | <b>Runtime</b> : '+runtime+' | <b>Language</b> : '+language+' | <b>Country</b> : '+country+'</p><hr style="border: 1px solid #C0C0C0;"><p class="card-content"><b>Director : </b>'+director+' <br><b>Writer : </b>'+writer+'<br><b>Actors : </b>'+actors+'<br><b>Awards : </b>'+awards+' <br><b>Box Office : </b>'+boxoffice+' <br><b>Production : </b>'+production+' <br><b>Website : </b> '+website+'<div class="plot"><p><b>Plot -</b>'+plot+'</p></div></p></div></div></div>');

    }



    function show_series(data)
    {
      console.log(data);

      let img = data.Poster;
      let title = data.Title;
      let imdb_id = data.imdbID;
      let imdb_votes = data.imdbVotes;
      let imdb_rating = data.imdbRating;
      let rated = data.Rated;

      let ratings = "";
      for (rating of data.Ratings) {
        ratings += rating.Source;
        ratings += "(<b>"+rating.Value+"</b>)";
        ratings += " | ";
      }

      let genre = data.Genre;
      let date_of_release = data.Released;

      let runtime = data.Runtime;
      let type = data.Type;
      let language = data.Language;
      let country = data.Country;
      let director = data.Director;
      let writer = data.Writer;
      let actors = data.Actors;
      let awards = data.Awards;
      let total_seasons = data.totalSeasons;

      let website_link = data.Website;

      let website = "";
      if(website_link!="N/A")
      {
        website = '<a href="'+website_link+'" target="blank" class="btn btn-default btn-sm" style="color:white;"> Click here</a>';
      }
      else {
        website = "N/A"
      }



      let plot = data.Plot;

      $('#get_response').html('');

      $('#get_response').html('<div class="row"><div class="col-md-3 col-sm-12"><img src="'+img+'" alt="'+title+'"  class="img img-fluid"></div><div class="col-md-9"><div class="card card-body"><h3><b>'+title+' (<span>IMDB ID : '+imdb_id+'</span> | <span>IMDB Votes : '+imdb_votes+'</span> | <span>IMDB Rating : '+imdb_rating+'</span>)</b></h3><hr style="border: 1px solid #C0C0C0;"><p><b>Rating</b> : '+ratings+' <br> <b>Genre</b> : '+genre+' | <b>Date of release </b> : '+date_of_release+' | <b>Rated </b> : '+rated+' | <b>Type</b> : '+type+' | <b>Runtime</b> : '+runtime+' | <b>Language</b> : '+language+' | <b>Country</b> : '+country+'</p><hr style="border: 1px solid #C0C0C0;"><p class="card-content"><b>Director : </b>'+director+' <br><b>Writer : </b>'+writer+'<br><b>Actors : </b>'+actors+'<br><b>Awards : </b>'+awards+' <br><b>Total seasons : </b>'+total_seasons+'<br><b>Website : </b> '+website+'<div class="plot"><p><b>Plot -</b>'+plot+'</p></div></p></div></div></div>');

    }


  });

});
