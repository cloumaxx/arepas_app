using RestSharp;
using System;
using RestSharp;
using System.Threading.Tasks;

namespace Arepas.Infrastructure.Notification
{
    public class Notifier
    {
        public Notifier()
        {
            static async Task Main(string[] args)
            {

                string instanceId = "instance1030"; // your instanceId
                string token = "yourtoken";         //instance Token
                string mobile = "+573163184131";
                string message = "Funciona?";
                var url = "https://api.ultramsg.com/" + instanceId + "/messages/chat";
                var client = new RestClient(url);
                var request = new RestRequest(url, Method.Post);
                request.AddHeader("content-type", "application/x-www-form-urlencoded");
                request.AddParameter("token", token);
                request.AddParameter("to", mobile);
                request.AddParameter("body", message);


                RestResponse response = await client.ExecuteAsync(request);
                var output = response.Content;
                Console.WriteLine(output);
            }
        }
    }
}

