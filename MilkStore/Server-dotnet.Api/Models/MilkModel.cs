using System.ComponentModel.DataAnnotations;

namespace Server_dotnet.Api.Models
{
    public class MilkModel
    {
        
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int Storage { get; set; }
        public int Price { get; set; }
        
    }

}