using Microsoft.EntityFrameworkCore;
using Server_dotnet.Api.Models;
using System;
namespace Server_dotnet.Api.Data;
public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new dataContext(
        serviceProvider.GetRequiredService<
        DbContextOptions<dataContext>>()))
        {
            // Look for any milk entry.
            if (context.Milk.Any()) { return; }

            context.Milk.AddRange(
            new Milk
            {
                id = "1",
                type = "Cashew Milk",
                storage = 100,
                name = "Good Cashew Milk"
            }
            // and more
            );



            //get the ison file from the wwwroot folder.
            var env = serviceProvider.GetRequiredService<IWebHostEnvironment>();
            var path = Path.Combine(env.WebRootPath, "files", "milk.json");
            //read the json content and then deserialize it to object,
            var jsonString = System.IO.File.ReadAllText(path);
            if (jsonString != null)
            {
//#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                Milk item = System.Text.Json.JsonSerializer.Deserialize<Milk>(jsonString);
//#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                if (item != null)
                {
                    context.Milk.Add(item); //insert the data to the database.
                    context.SaveChanges();
                }
            }
        }
    }

}
