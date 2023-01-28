using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server_dotnet.Api.Models;

    public class dataContext : DbContext
    {
        public dataContext (DbContextOptions<dataContext> options)
            : base(options)
        {
        }

        public DbSet<Server_dotnet.Api.Models.MilkModel> MilkModel { get; set; } = default!;
    }