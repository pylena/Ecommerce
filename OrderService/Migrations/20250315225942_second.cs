using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OrderService.Migrations
{
    /// <inheritdoc />
    public partial class second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "OrderListId",
                table: "Orders",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "OrdersList",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrdersList", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderListId",
                table: "Orders",
                column: "OrderListId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_OrdersList_OrderListId",
                table: "Orders",
                column: "OrderListId",
                principalTable: "OrdersList",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_OrdersList_OrderListId",
                table: "Orders");

            migrationBuilder.DropTable(
                name: "OrdersList");

            migrationBuilder.DropIndex(
                name: "IX_Orders_OrderListId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderListId",
                table: "Orders");
        }
    }
}
