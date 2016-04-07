var quoteJson;
var newQuote = '';

function quoteJson() { $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', 
        type: 'POST', 
        data: {}, 
        datatype: 'json',
        success: function(data) { var l = JSON.parse(data);
                                    newQuote = l.quote;
                                    newAuthor = l.author;
                                    console.log(newAuthor);
                                    $('#quote').animate({opacity:0}, 500, function(){
                                        $(this).animate({opacity:1}, 500);
                                        $('#quote').html('<span class="quote-mark">“</span><div class="quote-text">'+newQuote+'</div>');
                                        $('#author').html('<div class="quote-author"> — '+newAuthor+'</div>');
                                    });
                                    
                                    $('.tweet-quote').attr('href','https://www.twitter.com/intent/tweet?hashtag=quotes&text='+encodeURIComponent(newQuote)+' -'+encodeURIComponent(newAuthor));
                                },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "POAcS5FmKcmshFGVNBU7HEkVp1yep1AdMJZjsnulNb3OLJ1TKx"); 
        }
    });
    
    $(document).ready(function(){
        $('#tweet-quote').on('click', function(){
            
            $('#tweet-quote').attr('href', '')     
        });
    });

}

$(document).ready(function(){
  quoteJson();
   $('#new-quote').on('click', quoteJson)
});