using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Bakhtawar.Contracts
{
    public interface IDataSeeder
    {
        Task SeedDataAsync(IConfiguration configuration);
    }
}